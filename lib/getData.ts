import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getCourses() {
    return prisma.course.findMany()
}

export async function getUsers() {
    return prisma.user.findMany()
}

export async function getProfiles(user: string | undefined) {
    if (user) {
        console.log("getProfiles USER ID: ", user)
        return prisma.profile.findUnique({
            where: {
                userEmail: user
            }
        })
    }
}

export async function getTheme() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id

    return prisma.theme.findUnique({
        where: {
            id: userId
        }
    })
}

export async function getUserPreferences() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id

    console.log("USER ID", userId)

    if (userId) {
        return prisma.userPreferences.findUnique({
            where: {
                userId: userId
            }
        })
    }

}