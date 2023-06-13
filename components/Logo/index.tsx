"use client"

import Image from "next/image";
import LightLogo from "@/public/assets/images/edurion-light.svg";
import DarkLogo from "@/public/assets/images/edurion-dark.svg";
import sx from "@/styles/component.module.scss";
import { Theme } from "@/interfaces/global";

interface IPropsLogo {
    cn?: string;
    src?: string | string[];
    alt: string;
    theme: Theme;
    position?: "left" | "center" | "right";
}

const Logo = ({ cn, src, alt, theme = "light", position = "left" }: IPropsLogo) => {

    return (
        <div className={sx["logo"]} data-position={position}>
            <Image className={cn} src={src ? src : theme === "dark" ? DarkLogo : LightLogo} alt={alt} priority />
        </div>
    )
}

export default Logo