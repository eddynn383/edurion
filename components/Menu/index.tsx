"use client";

import MenuItem from "@/components/MenuItem";
import { IMenuItem } from "@/components/MenuItem/interface";
import { IPropsMenu } from "./interface";
import { useTheme } from 'next-themes';

import sx from "@/styles/component.module.scss";

const Menu = ({ id, style, data }: IPropsMenu) => {

    let active = false

    const clickHandler = (e: any) => {
        e.isActive = active
        active = !active
    }

    return (
        <nav className={sx.menu} id={id} style={style} >
            <ul data-level={1}>
                {
                    data?.map((item: IMenuItem, i: React.Key) => {
                        const depthLevel = 0
                        return (
                            <MenuItem item={item} key={i} depthLevel={depthLevel} />
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Menu