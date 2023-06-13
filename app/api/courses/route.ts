import { prisma } from "@/lib/prismadb";
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        const courseEntry = await prisma.course.findMany({});
        return NextResponse.json({ courseEntry })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

export const POST = async (request: Request) => {
    const { title, description, image, category, price, level, status, startDate, endDate, instructorId } = await request.json();
    try {
        const newCourse = await prisma.course.create({
            data: {
                title,
                description,
                image,
                category,
                price,
                level,
                status,
                startDate: new Date(startDate), // Make sure to convert these to Date objects
                endDate: new Date(endDate),
                instructor: {
                    connect: {
                        id: instructorId
                    }
                }
            }
        })

        return NextResponse.json({ newCourse }, { status: 200 })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

