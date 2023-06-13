"use client";

import { IPropsBadge } from "./interface";
import sx from "@/styles/component.module.scss";

const Badge = ({ id, value, title, style, max, size = "medium", status = "accent", children }: IPropsBadge) => {
    const val = max ? (value > max ? `${max}+` : `${value}`) : `${value}`

    if (!value && !children) {
        return null;
    }

    return (
        <span className={sx["badge"]} id={id} title={title} style={style} data-value={val} data-maxvalue={max} data-size={size} data-status={status} >
            {children ? children : val}
        </span>
    )
}

export default Badge