"use client";

import React from "react";
import Icon from "@/components/Icon";
import NoLink from "@/components/MenuNoLink";
import MenuItem from "@/components/MenuItem";
import { IMenuItem } from "@/components/MenuItem/interface";
import { IPropsMenuDropdown } from "./interface";
import sx from "@/styles/component.module.scss";

const MenuDropdown = ({ items, parent, show, setShow, depthLevel, theme = "light" }: IPropsMenuDropdown) => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? " dropdown-submenu" : ""

    return (
        <>
            {items && items.length > 0 && (
                <ul className={`${sx['menu-dropdown']}`} data-show={show}>
                    <NoLink id="back-to" title={parent} iconBefore={<Icon value="chevron-left" theme={theme} />} text={parent} theme={theme} onClick={() => setShow(false)} />
                    {
                        items?.map((item: any, i: React.Key) => (
                            <MenuItem item={item} key={i} depthLevel={depthLevel} />
                        ))
                    }
                </ul>
            )}
        </>
    )
}

export default MenuDropdown
