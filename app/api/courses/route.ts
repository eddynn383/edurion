import prisma from "@/lib/prismadb";
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        const courseEntry = await prisma.course.findMany({});
        return NextResponse.json({ courseEntry })
    } catch (error: any) {
        console.log(error)
        return new Response(error, { status: 500 });
    }
}

export const POST = async (request: Request) => {
    const { title, description, startDate, endDate, instructor } = await request.json();
    try {
        const newCourse = await prisma.course.create({
            data: {
                title,
                description,
                startDate: new Date(startDate), // Make sure to convert these to Date objects
                endDate: new Date(endDate),
                instructor: {
                    connect: {
                        id: "646b46b63cd86937ff46611a"
                    }
                }
            }
        })

        return NextResponse.json({ newCourse })
    } catch (error: any) {
        console.log(error)
        return new Response(error, { status: 500 });
    }
}

