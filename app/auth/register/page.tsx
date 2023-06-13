"use client"

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import useDelay from "@/hooks/useDelay";

import RegisterForm from "@/modules/RegisterForm";

import sx from "@/styles/page.module.scss"
import ProgressRadial from "@/components/ProgressRadial";
import { useSession } from "next-auth/react";

export default function Register() {
    const { resolvedTheme: theme } = useTheme();
    const { data: session } = useSession()
    const router = useRouter()
    const [isSuccess, setIsSuccess] = useState(false)

    // if (session) {
    //     redirect("/dashboard/0001")
    // }

    const submitHandler = async (email: string, password: string) => {
        const response = await fetch('/api/register', {
            method: 'POST',
            cache: "no-cache",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        }).then(async () => {
            console.log("The user was successfully registred");
            setIsSuccess(true)
            const timer = setTimeout(() => {
            }, 5000);
            router.push('/auth/login');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className={sx["register"]}>
            <div className={sx["register_description"]}>
                <h1 className={sx["title"]}>Create new account</h1>
                <p className={sx["description"]}>Welcome! Please enter your details.</p>
            </div>
            {/* <ProgressRadial size={40} progress={90} trackWidth={4} indicatorWidth={4} indicatorCap="square" /> */}
            <RegisterForm cn={sx["register_form"]} onSubmit={submitHandler} onSuccess={isSuccess} />
        </div>
    )
}