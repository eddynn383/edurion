"use client";

import { usePathname } from "next/navigation";
import { IPropsPageTitle } from "./interface"
import sx from "@/styles/component.module.scss"


const PageTitle = ({ id }: IPropsPageTitle) => {
    const pathname = usePathname()
    const pagename = pathname.replace("/", "").split("/").pop()
    const currPagename = pagename?.replace("-", " ")

    return (
        <div className={sx["page-title"]} id={id} >
            <h1>{currPagename}</h1>
        </div>
    )
}

export default PageTitle