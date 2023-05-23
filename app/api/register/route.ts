import { NextResponse } from 'next/server';
import bcrypt from "bcrypt"
import prisma from "@/lib/prismadb";

interface ResponseData {
    error?: string;
    msg?: string;
}

const validateEmail = (email: string): boolean => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regEx.test(email);
};

const validateForm = async (email: string, password: string) => {

    if (!validateEmail(email)) {
        return { error: "Email is invalid" };
    }

    const emailUser = await prisma.user.findUnique({
        where: { email: email }
    })

    if (emailUser) {
        return { error: "Email already exists" };
    }

    if (password.length < 8) {
        return { error: "Password must have 8 or more characters" };
    }

    return null;
};

export const POST = async (request: Request) => {
    const { name, email, password, roles } = await request.json();

    try {
        const errorMessage = await validateForm(email, password);

        if (errorMessage) {
            return new Response(errorMessage.error, { status: 400 });
        }

        // encrypt the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // insert the new user into database
        const user: any = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                roles
            },
        })

        const theme: any = await prisma.theme.create({
            data: {
                type: 'LIGHT',
                style: [],
                userId: user.id,
            },
        });

        // return new Response(JSON.stringify(user, theme), { status: 201 })
        return NextResponse.json({ user, theme })

    } catch (error: any) {
        return new Response("Failed to create a new user", { status: 500 });
    }

}