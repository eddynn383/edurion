"use server"

import { v2 as cloudinary } from 'cloudinary'

const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export async function getSignature() {
    const timestamp = Math.round(new Date().getTime() / 1000).toString();

    const signature = cloudinary.utils.api_sign_request(
        { timestamp, folder: 'next' },
        cloudinaryConfig.api_secret as string
    )

    return { timestamp, signature }
}

interface IPropsSaveToDatabase {
    public_id: string;
    version: string;
    signature: string;
}

export async function saveToDatabase({ public_id, version, signature }: IPropsSaveToDatabase) {
    // verify the data
    const expectedSignature = cloudinary.utils.api_sign_request(
        { public_id, version },
        cloudinaryConfig.api_secret as string
    )

    console.log("save to database")

    if (expectedSignature === signature) {

        console.log("TEst")
        // safe to write to database
        console.log({ public_id })
        return public_id
    }
}