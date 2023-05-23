"use client";

import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LoginForm from "@/modules/LoginForm";

import sx from "@/styles/page.module.scss"

export default function Login() {
    const { resolvedTheme: theme } = useTheme()
    const { data: session } = useSession()

    if (session) {
        redirect("/dashboard/0001")
    }

    return (
        <div className={sx["login"]}>
            <div className={sx["login_description"]}>
                <h1 className={sx["title"]}>Log in to your Account</h1>
                <p className={sx["description"]}>Welcome back! Select method to log in.</p>
            </div>
            <LoginForm cn={sx["login_form"]} theme={theme} />
        </div>
    )

}