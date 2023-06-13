import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prismadb";

export const GET = async (request: Request) => {
    try {
        const userEntry = await prisma.user.findMany({});
        return NextResponse.json({ userEntry })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}