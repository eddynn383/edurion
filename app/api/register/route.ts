import { NextResponse } from 'next/server';
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prismadb";
import theme from "@/lib/theme.json";

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
    const { name, email, password } = await request.json();
    const defaultTheme = theme

    try {
        const errorMessage = await validateForm(email, password);

        if (errorMessage) {
            return NextResponse.json({ error: errorMessage.error }, { status: 400 });
        }

        // encrypt the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // create user preferences


        // insert the new user into database
        const user: any = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })

        const profile = await prisma.profile.create({
            data: {
                user: {
                    connect: {
                        email: user.email
                    }
                },
                avatar: user?.image || ""
            }
        })

        const userPreferences = await prisma.userPreferences.create({
            data: {
                themeMode: "light",
                theme: {
                    create: {
                        defaultStyle: {
                            light: defaultTheme.light,
                            dark: defaultTheme.dark
                        },
                        customStyles: {},
                    },
                },
                user: {
                    connect: {
                        id: user.id,
                    }
                },
                paymentMethods: "{}",
            },
        });

        // return new Response(JSON.stringify(user, theme), { status: 201 })
        return NextResponse.json({ user, profile, userPreferences }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }

}