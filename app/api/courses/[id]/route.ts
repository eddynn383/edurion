import prisma from "@/lib/prismadb";
import { NextResponse } from 'next/server';

interface IPropsParams {
    params: {
        id: string;
    }
}

export const GET = async (request: Request, { params }: IPropsParams) => {
    const id = params.id

    try {
        const entry = await prisma.course.findUnique({
            where: {
                id
            }
        });

        return NextResponse.json({ entry })
    } catch (error: any) {
        console.log(error)
        return new Response(error, { status: 500 });
    }
}

export const PUT = async (request: Request, { params }: IPropsParams) => {
    const id = params.id
    const data = await request.json();

    try {
        const entry = await prisma.course.update({
            where: {
                id
            },
            data
        });

        return NextResponse.json({ entry })
    } catch (error: any) {
        console.log(error)
        return new Response(error, { status: 500 });
    }
}

export const DELETE = async (request: Request, { params }: IPropsParams) => {
    const id = params.id

    try {
        const entry = await prisma.course.delete({
            where: {
                id
            }
        })

        return NextResponse.json({ entry })
    } catch (error: any) {
        console.log(error)
        return new Response(error, { status: 500 });
    }
}