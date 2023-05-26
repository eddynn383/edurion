import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import CoursesList from "@/modules/CoursesList";

import Content from "@/modules/PageContent";
import header from "@/lib/tableHeader";
import { addNewUserDrawerHandler } from "@/lib/handlers";
import { getCourses } from "@/lib/getData";
import CoursesActions from "@/modules/CoursesActions";


const Courses = async () => {
    const session = await getServerSession(authOptions);
    const courses = await getCourses();

    if (!session) {
        redirect('/auth/login?callbackUrl=/courses')
    }
    console.log(session)
    console.log(courses.courseEntry)

    const theme = "dark"

    return (
        <>
            <CoursesActions theme={theme} />
            <Content>
                <CoursesList dataHeading={header} dataBody={courses.courseEntry} />
            </Content>
        </>
    )
}

export default Courses