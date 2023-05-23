"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import Link from "@/components/MenuLink";
import NoLink from "@/components/MenuNoLink";
import MenuDropdown from "@/components/MenuDropdown";
import { IPropsMenuItem } from "./interface";
import sx from "@/styles/component.module.scss";

const MenuItem = ({ id, style, item, depthLevel, theme = "light" }: IPropsMenuItem) => {
    const [show, setShow] = useState(false)

    const pathname = usePathname()

    // console.log(pathname)

    return (
        <li className={sx['menu-item']} id={id} style={style} data-active={pathname === item.url ? true : false}>
            {
                item.children ? (
                    <>
                        <NoLink title={item.title} iconBefore={item.icon && <Icon value={item.icon} />} text={item.title} iconAfter={<Icon value="chevron-right" />} theme={theme} onClick={() => setShow(prev => !prev)} />
                        <MenuDropdown items={item.children} parent={item.title} setShow={setShow} show={show} depthLevel={depthLevel} theme={theme} />
                    </>
                ) : (
                    <Link to={item.url} title={item.title} iconBefore={item.icon && <Icon value={item.icon} />} text={item.title} theme={theme} />
                )
            }
        </li>
    )
}

export default MenuItem
