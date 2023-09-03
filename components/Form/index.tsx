"use client"

import { IPropsForm } from "./interface";
import sx from "@/styles/component.module.scss";

const Form = ({ cn, id, style, action, children }: IPropsForm) => {
    return (
        <form className={cn ? cn : sx["form"]} id={id} style={style} action={action}>{children}</form>
    )
}

export default Form