import { redirect } from "next/navigation";
import LoginForm from "@/modules/LoginForm";

import sx from "@/styles/page.module.scss"
import { getUserPreferences } from "@/lib/getData";

export default async function Login() {
    // const prefs = await getUserPreferences()
    // const theme = prefs?.themeMode

    return (
        <div className={sx["login"]}>
            <div className={sx["login_description"]}>
                <h1 className={sx["title"]}>Log in to your Account</h1>
                <p className={sx["description"]}>Welcome back! Select method to log in.</p>
            </div>
            <LoginForm cn={sx["login_form"]} />
        </div>
    )

}