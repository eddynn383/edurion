import { FormEvent } from "react";
// import FileUpload from "@/components/FileUploadOld";
import FileUpload, { FileWithPreview } from "@/components/FileUpload";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import getServerSession from "next-auth/next";
import { useSession } from "next-auth/react"
import Side from "@/modules/Side";
import Main from "@/modules/Main";
import Content from "@/modules/Content";

import { useRouter } from "next/navigation"
import Toolbar from "@/modules/Toolbar";
import { getSignature, saveToDatabase } from "@/app/_actions";
import { NextResponse } from "next/server";
import { setCourses } from "@/lib/setData";
import CourseCreationForm from "@/modules/CourseCreationForm";
import Form from "@/components/Form";



const Page = async () => {

    return (
        <Content>
            <Content.Body orient="horizontal" leftWidth="1fr" rightWidth="260px">
                {/* <Form action={handleSubmit}> */}
                {/* <form action={handleSubmit} > */}
                <CourseCreationForm />
                {/* </form> */}
                {/* </Form> */}
                <Side>
                    bla bla bla
                </Side>
            </Content.Body>
            <Content.Footer >
                <Toolbar type="footer" />
            </Content.Footer>
        </Content>
    )
}

export default Page