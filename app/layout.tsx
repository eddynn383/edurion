import { Providers } from "./providers";
// import { getServerSession } from "next-auth/next";
import { getUserPreferences } from "@/lib/getData";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import "@/styles/globals.scss"

interface IPropsRootLayout {
    children: React.ReactNode;
}

export const metadata = {
    title: "Edurion",
    description: "Learn your limits",
};

const RootLayout = async ({ children }: IPropsRootLayout) => {
    const prefs = await getUserPreferences()
    const theme = prefs?.themeMode
    console.log("THEME in ROOT:", theme)
    return (
        <html lang="en" data-theme={theme ? theme : "light"}>
            <body>
                <Providers>
                    {children}
                </Providers>
                <div id="drawer-root"></div>
            </body>
        </html>
    );
}

export default RootLayout;

