"use client";

import Image from "next/image";
import { IPropsAvatar } from "./interface";
import sx from "@/styles/component.module.scss";


const Avatar = ({ src, alt, id, style, theme = "light", size = "medium", type = "square" }: IPropsAvatar) => {
    return (
        <div className={sx.avatar} id={id} style={style} data-theme={theme} data-size={size} data-type={type}>
            <Image className="profile" width="36" height="36" src={src} alt={alt} />
        </div>
    )
}

export default Avatar