"use client"

import Link from "next/link"
import sx from "@/styles/component.module.scss"

const MyLink = ({ href, status = "default", children, onClick }: any) => {
    return (
        <>
            {href && !onClick && <Link className={sx["link"]} data-status={status} href={href} >{children}</Link>}
            {onClick && !href && <button className={sx["link"]} type="button" data-status={status} onClick={onClick}>{children}</button>}
        </>
    )
}

export default MyLink