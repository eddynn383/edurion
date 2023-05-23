import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Loading from "@/components/Loading";

const Catalog = async ({ layout }: any) => {
    const session = await getServerSession(authOptions);
    const userRole: any = session?.user?.roles
    console.log("AUTH", layout)
    if (!session) {
        redirect('/auth/login?callbackUrl=/catalog')
    } else {
        if (!["ADMIN", "LEARNER"]?.some((role: string) => userRole.includes(role))) {
            redirect('/unauthorized')
        }
    }

    return <h1>Catalog</h1>;
}

export default Catalog;