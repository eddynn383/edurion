"use client";

import Text from "@/components/Text";
import { IPropsMenuNoLink } from "./interface";
import sx from "@/styles/component.module.scss";

const MenuNoLink = ({ id, title, text, style, iconBefore, iconAfter, theme = "light", onClick, children }: IPropsMenuNoLink) => {
    return (
        <button className={sx['menu-nolink']} id={id} title={title} style={style} data-theme={theme} onClick={onClick}>
            {iconBefore}
            {text && <Text theme={theme}>{text}</Text>}
            {iconAfter}
            {children}
        </button>
    )
}

export default MenuNoLink