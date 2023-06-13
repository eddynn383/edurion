import { prisma } from "@/lib/prismadb";
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        const entry = await prisma.content.findMany({});

        return NextResponse.json({ entry })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

export const POST = async (request: Request) => {
    const { title, type, content } = await request.json();

    try {
        const newCourse = await prisma.content.create({
            data: {
                title,
                type,
                content,
                course: {
                    connect: {
                        id: "646b46b63cd86937ff46611a"
                    }
                }
            }
        })

        return NextResponse.json({ newCourse })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

