import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Access from "@/lib/pageAccess";
import { redirect } from "next/navigation";
import Loading from "@/components/Loading";

const Page = async ({ params }: { params: { slug: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        // if (!session?.user.roles) {

        // }
        redirect('/auth/login?callbackUrl=/dashboard')
    }
    console.log(session)
    console.log(params)
    return <h1>
        <p>I'm logged with user: {session.user?.email}</p>
        <p>this is the dashboard no: {params.slug}</p>
    </h1>;
}

// Dashboard.auth = {
//     roles: ["LEARNER", "MANAGER", "ADMIN"],
//     loading: <Loading />,
//     unauthorized: "/unauthorized", // redirect to this url
// }

export default Page