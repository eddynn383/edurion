"use client";

import sx from "@/styles/component.module.scss";
import { IPropsLabel } from "./interface";

const Label = ({ id, htmlFor, style, theme = "light", children }: IPropsLabel) => {
    return (
        <label className={sx["label"]} id={id} htmlFor={htmlFor} style={style} data-theme={theme}>{children}</label>
    )
}

export default Label