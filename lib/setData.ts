"use server"

import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function setCourses(body: any) {
    if (body) {
        try {
            const newEntry = await prisma.course.create({
                data: body
            })

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}

export async function setContent(body: any) {
    if (body) {
        try {
            const newEntry = await prisma.content.create({
                data: body
            })

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}

export async function setTheme(body: any) {
    if (body) {
        try {
            const newEntry = await prisma.theme.create({
                data: body
            })

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}

export async function setUsers(body: any) {
    if (body) {
        try {
            const newEntry = await prisma.user.create({
                data: body
            })

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }
    }
}