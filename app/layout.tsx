import { Providers } from "./providers";
import { getServerSession } from "next-auth/next";
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
    return (
        <html lang="en">
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

