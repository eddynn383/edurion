// import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Section from "@/modules/Section";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Home = async ({ params }: { params: { slug: string } }) => {
    const session = await getServerSession(authOptions);
    const userID: any = session?.user?.id

    console.log(userID)
    console.log(params)
    if (!session) {
        redirect('/auth/login?callbackUrl=/')
    } else {
        redirect(`/${userID}`)
        // if (!["LEARNER"]?.some((role: string) => userRole.includes(role))) {
        //     redirect('/unauthorized')
        // }
    }
    return (
        <Section>
            <h1>Hello, Bula cu id!</h1>;
        </Section>
    )

}

export default Home