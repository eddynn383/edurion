"use client"

import Link from "next/link"
import sx from "@/styles/component.module.scss"

const MyLink = ({ href, children }: any) => {
    return (
        <Link className={sx["link"]} href={href} >{children}</Link>
    )
}

export default MyLink