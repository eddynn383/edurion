"use client";

import { IPropsButton } from "./interface";
import sx from "@/styles/component.module.scss";


const ButtonOld = ({ id, value, size = "M", variant = "solid", status = "accent", shade = "100", content = "text", type = "button", title, disabled, style, onClick, children }: IPropsButton) => {
    return (
        <button className={sx.button} id={id} value={value} type={type} title={title} disabled={disabled} style={style} onClick={onClick} data-variant={variant} data-size={size} data-status={status} data-shade={shade} data-content={content}  >
            {children ? children : value}
        </button>
    )
}

export default ButtonOld