"use client"

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



const Page = () => {


    // const session = await getServerSession(authOptions)
    // const { data: session, status } = useSession()
    // const userID: any = session?.user?.id

    // console.log("USER ID: ", userID)
    const getFormData = (data: any) => {
        console.log(data)
    }

    const saveHandler = async (e: FormEvent<HTMLFormElement>) => {


        // await setCourses({
        //     title,
        //     description,
        //     image,
        //     category,
        //     price,
        //     level,
        //     startDate,
        //     endDate,
        //     // instructorId: userID,
        // })
    }

    async function action(files: any[]) {
        const file = files[0]
        console.log(file)
        if (!file) return
        // setImage(files)

        // get a signature using server action
        const { timestamp, signature } = await getSignature()

        // upload to cloudinary using the signature
        const formData = new FormData()

        formData.append('file', file)
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string)
        formData.append('signature', signature)
        formData.append('timestamp', timestamp)
        formData.append('folder', 'next')

        const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;
        const data = await fetch(endpoint, {
            method: 'POST',
            body: formData
        }).then(res => res.json())

        // write to database using server actions
        await saveToDatabase({
            version: data?.version,
            signature: data?.signature,
            public_id: data?.public_id
        })
    }

    // console.log("images:", image)

    return (
        <Content>
            <Content.Body orient="horizontal" leftWidth="1fr" rightWidth="260px">
                <Form onSubmit={saveHandler}>
                    <CourseCreationForm onSubmit={getFormData} action={action} />
                </Form>
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