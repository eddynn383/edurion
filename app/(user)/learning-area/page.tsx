// import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Section from "@/modules/Section";
import { redirect } from "next/navigation";

const LearningArea = async () => {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     redirect('/auth/login?callbackUrl=/dashboard')
    // }
    return (
        <Section>
            <h1>Learning Area</h1>
        </Section>
    )

}

export default LearningArea;