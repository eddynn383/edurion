"use client";

import { useState, useEffect, useRef } from "react";
import { IPropsInput } from "./interface";
import sx from "@/styles/component.module.scss";
import Label from "@/components/Label";
import Icon from "../Icon";

const Input = ({ id, name, type, innerRef, placeholder, label, value, autoComplete, ariaInvalid, ariaDescribedBy, style, theme = "light", variant = "outline", size = "medium", status = "default", iconBefore, iconAfter, onClick, onChange }: IPropsInput) => {
    const [inputType, setInputType] = useState(type);
    const [currentStatus, setCurrentStatus] = useState(status);
    const [focus, setFocus] = useState(false);
    const [error, setError] = useState(false);

    const innerProps = {
        name,
        id,
        placeholder,
        value,
        autoComplete,
        ref: innerRef,
        onClick,
        onChange,
        onFocus: (e: any) => {
            setFocus(true);  // set focus to true when input is focused
        },
        onBlur: (e: any) => {
            setFocus(false);  // set focus to false when input loses focus
        },
    }

    useEffect(() => {
        setInputType(type)
    }, [type])

    useEffect(() => {
        setCurrentStatus(status)
    }, [status])

    return (
        <div className={sx["input"]} id={id} style={style} data-theme={theme} data-variant={variant} data-size={size} data-status={currentStatus} data-icon={iconBefore && iconAfter ? 'both' : iconBefore ? 'before' : iconAfter ? 'after' : null} data-focus={focus}>
            {iconBefore}
            {
                <input className={sx["input-inner"]} {...innerProps} type={inputType} aria-invalid={ariaInvalid} aria-describedby={ariaDescribedBy} />
            }
            {iconAfter}
            {currentStatus === "success" && <Icon value="circle-check" status={currentStatus} beatFade={true} style={{ "--fa-animation-iteration-count": "0.2s" } as React.CSSProperties} />}
            {currentStatus === "fail" && <Icon value="circle-exclamation" status={currentStatus} beatFade={true} style={{ "--fa-animation-iteration-count": "0.2s" } as React.CSSProperties} />}
        </div>
    )
}

export default Input