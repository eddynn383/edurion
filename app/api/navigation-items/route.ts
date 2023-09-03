import { prisma } from "@/lib/prismadb";
import { NextResponse } from 'next/server';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const GET = async (request: Request) => {
    try {
        const result = await prisma.navigationItem.findMany({});
        return NextResponse.json({ result })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

export const POST = async (request: Request) => {
    const { title, url, icon, isPublish, allowedRoles, allowedUsers } = await request.json();
    const session = await getServerSession(authOptions)
    const userID = session?.user.id;
    try {
        const newCourse = await prisma.navigationItem.create({
            data: {
                title,
                url,
                icon,
                allowedUsers,
                allowedRoles,
                isPublish,
                createdBy: {
                    connect: {
                        id: userID
                    }
                },
                updatedBy: {
                    connect: {
                        id: userID
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
