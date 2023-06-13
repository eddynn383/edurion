// import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Section from "@/modules/Section";
import { redirect } from "next/navigation";

const Users = async () => {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     redirect('/auth/login?callbackUrl=/Users')
    // }
    // console.log(session)
    return (
        <Section>
            <h1><p>I&apos;m logged with user:</p></h1>
        </Section>
    );
}

export default Users