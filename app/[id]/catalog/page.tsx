// import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Loading from "@/components/Loading";
import Section from "@/modules/Section";
import Content from "@/modules/Content";
import Card from "@/components/Card";
import { getCourses } from "@/lib/getData";

import sx from "@/styles/page.module.scss";
import { Suspense } from "react";

const Catalog = async ({ layout }: any) => {

    const courses = await getCourses()

    console.log(courses)
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
            <Content.Body orient="vertical">
                <div className={sx["catalog-cards"]}>
                    <Suspense fallback={<Loading />}>
                        {
                            courses.map((course, idx) => {
                                return (
                                    <Card data={course} />
                                )
                            }
                            )
                        }
                    </Suspense>
                </div>
            </Content.Body>
        </Content>
    )
}

export default Catalog;