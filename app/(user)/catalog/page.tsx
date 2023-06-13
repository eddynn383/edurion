// import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Loading from "@/components/Loading";
import Section from "@/modules/Section";
import Content from "@/modules/Content";

const Catalog = async ({ layout }: any) => {
    // const session = await getServerSession(authOptions);
    // const userRole: any = session?.user?.roles
    // console.log("AUTH", layout)
    // if (!session) {
    //     redirect('/auth/login?callbackUrl=/catalog')
    // } else {
    //     if (!["ADMIN", "LEARNER"]?.some((role: string) => userRole.includes(role))) {
    //         redirect('/unauthorized')
    //     }
    // }

    return (
        <Content>
            <Content.Body orient="horizontal">
                <Section>
                    <h1>Catalog</h1>
                </Section>
            </Content.Body>
        </Content>
    )
}

export default Catalog;