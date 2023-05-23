import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Users = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/auth/login?callbackUrl=/Users')
    }
    console.log(session)
    return <h1><p>I'm logged with user: {session.user?.email}</p></h1>;
}

export default Users