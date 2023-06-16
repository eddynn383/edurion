"use server"

import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function deleteUser(id: string) {
    if (id) {
        try {
            const newEntry = await prisma.user.delete({
                where: { id }
            })

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}

export async function deleteCourse(id: string) {
    if (id) {
        try {
            const newEntry = await prisma.course.delete({
                where: { id }
            })

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}