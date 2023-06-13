"use client";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

interface AuthProps {
    children: any;
    roles?: string[];
    loading?: React.ReactElement;
    unauthorized?: any;
}

declare module 'next-auth' {
    interface User {
        id: string;
        name: string;
        email: string;
        image: string;
        imageLarge: string;
        roles: string[];
    }

    interface Session {
        user: User;
    }
}

export function Providers({ children, session }: any) {
    library.add(fas)
    const { resolvedTheme: theme } = useTheme()
    console.log("THEME:", theme)
    return (
        // <ThemeProvider enableSystem={true}>
        <SessionProvider session={session}>
            {/* <Auth roles={roles} loading={loading} unauthorized={unauthorized}> */}
            {children}
            {/* </Auth> */}
        </SessionProvider>
        // </ThemeProvider>
    )
}

// function Auth({ children, roles, loading, unauthorized }: AuthProps) {
//     // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//     const { data: session, status } = useSession({ required: true })
//     const userRole: any = session?.user?.roles
//     const router = useRouter()

//     if (status === "loading") {
//         return loading
//     }

//     if (!roles?.some((role: string) => userRole.includes(role))) {
//         router.push(unauthorized)
//         return
//     }

//     return children
// }