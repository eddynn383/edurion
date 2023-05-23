import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Home = async () => {
    const session = await getServerSession(authOptions);
    const userRole: any = session?.user?.roles
    if (!session) {
        redirect('/auth/login?callbackUrl=/')
    } else {
        if (!["LEARNER"]?.some((role: string) => userRole.includes(role))) {
            redirect('/unauthorized')
        }
    }
    return <h1>Hello, Bula cu id!</h1>;
}

export default Home