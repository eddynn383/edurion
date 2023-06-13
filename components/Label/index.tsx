"use client";

import sx from "@/styles/component.module.scss";
import { IPropsLabel } from "./interface";

const Label = ({ id, htmlFor, style, size = "M", children }: IPropsLabel) => {
    return (
        <label className={sx["label"]} id={id} htmlFor={htmlFor} data-size={size} style={style}>{children}</label>
    )
}

export default Label