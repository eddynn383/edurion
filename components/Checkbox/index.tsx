"use client";

import { useRef, useState, useEffect } from "react";
import { IPropsCheckbox } from "./interface";
import sx from "@/styles/component.module.scss"

const Checkbox = ({ children, theme = "light", size = "medium", checked, indeterminate, onChange }: IPropsCheckbox) => {
    const checkboxRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate || false;
        }
    }, [indeterminate]);

    const onFocusHandler = () => {
        setIsFocused(true);  // set focus to true when input is focused
        // if (onFocus) {
        //     onFocus(e);
        // }
    }

    const onBlurHandler = () => {
        setIsFocused(false);  // set focus to false when input loses focus
        // if (onBlur) {
        //     onBlur(e);
        // }
    }

    return (
        <label htmlFor="checkbox" className={sx["checkbox"]} data-theme={theme} data-size={size} data-focus={isFocused}>
            <input id="checkbox" className={sx["checkbox_input"]} type="checkbox" ref={checkboxRef} checked={checked} data-state={checked ? "checked" : indeterminate ? "indeterminate" : "unchecked"} onChange={onChange} onFocus={() => onFocusHandler()} onBlur={() => onBlurHandler()} />
            <span className={sx["checkbox_checkmark"]}></span>
            <span className={sx["checkbox_text"]}>{children}</span>
        </label>
    )
}

export default Checkbox
