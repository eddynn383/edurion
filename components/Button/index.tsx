"use client";

import { IPropsButton } from "./interface";
import sx from "@/styles/component.module.scss";


const Button = ({ id, value, size = "M", mode = "primary", status = "accent", variant = "solid", shade = "100", content = "text", selected, type = "button", title, disabled, style, controls, onClick, children }: IPropsButton) => {


    const defaultAttrs = {
        className: sx["button"],
        id,
        type,
        title,
        disabled,
        value,
        style
    }

    const customAttrs = {
        "data-mode": mode,
        "data-variant": variant,
        "data-status": status,
        "data-shade": shade,
        "data-size": size,
        "data-content": content,
        "data-selected": selected
    }

    const a11y = {
        "aria-controls": controls,
    }

    const events = {
        onClick
    }

    return (
        <button {...defaultAttrs} {...customAttrs} {...a11y} {...events} >
            {children ? children : value}
        </button>
    )
}

export default Button