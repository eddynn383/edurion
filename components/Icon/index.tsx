"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPropsIcon } from "./interface";
import sx from "@/styles/component.module.scss"

const Icon = ({ value, status = "default", shake, beatFade, theme = "light", style }: IPropsIcon) => {
    return (
        <div className={sx["icon"]} data-status={status} data-theme={theme}>
            <FontAwesomeIcon icon={value} shake={shake} beatFade={beatFade} style={style} />
        </div>
    )
}

export default Icon