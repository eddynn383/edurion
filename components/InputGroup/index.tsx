"use client";

import { IPropsInputGroup } from "./interface";
import sx from "@/styles/component.module.scss";

const InputGroup = ({ id, style, layout = "one", children }: IPropsInputGroup) => {
    return (
        <div className={sx["input-group"]} id={id} data-layout={layout} style={style}>{children}</div>
    )
}

export default InputGroup