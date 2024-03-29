"use client";

import sx from "@/styles/component.module.scss";
import { IPropsText } from "./interface";

const Text = ({ cn, size = "medium", status = "default", children }: IPropsText) => {
    return (
        <span className={cn ? `${sx.text} ${cn}` : `${sx.text}`} data-size={size} data-status={status}>{children}</span>
    )
}

export default Text