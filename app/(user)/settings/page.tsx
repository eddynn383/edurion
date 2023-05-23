import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Settings = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/auth/login?callbackUrl=/dashboard')
    }
    console.log("SESSION:", session);
    return <h1>Settings</h1>;
}

export default Settings;