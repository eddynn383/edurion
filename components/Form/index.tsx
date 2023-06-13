"use client";

import { IPropsForm } from "./interface";
import sx from "@/styles/component.module.scss";

const Form = ({ cn, id, style, onSubmit, children }: IPropsForm) => {
    return (
        <form className={cn ? cn : sx["form"]} id={id} style={style} onSubmit={onSubmit}>{children}</form>
    )
}

export default Form