"use client";

import { useState, useEffect } from "react";
import { IPropsDrawer } from "./interface";
import sx from "@/styles/component.module.scss";
import ReactDOM from "react-dom";
import Button from "../ButtonOld";
import Icon from "../Icon";

const Drawer = ({ id, style, width, state, onClickOutside, children }: IPropsDrawer) => {
    const [delayedState, setDelayedState] = useState("");
    const [el, setEl] = useState<HTMLElement | null>(null);
    const innerStyle = {
        "width": width,
    }

    useEffect(() => {
        setEl(document.getElementById("drawer-root"));
    }, []);

    useEffect(() => {
        if (state) {
            // Delay the state update by 10ms
            const timeoutId = setTimeout(() => {
                setDelayedState(state);
            }, 10);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [state]);

    if (el === null) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={sx["drawer"]} id={id} style={style} data-width={width} data-state={delayedState}>
            <div className={sx["drawer-mask"]} onClick={onClickOutside}></div>
            <div className={sx["drawer-inner"]} style={innerStyle}>
                {children}
            </div>
        </div>,
        el
    );
};

const Header = ({ children }: any) => <div className={sx['drawer-header']}>{children}</div>
Drawer.Header = Header;

const Body = ({ children }: any) => <div className={sx['drawer-body']}>{children}</div>
Drawer.Body = Body;

const Footer = ({ children }: any) => <div className={sx['drawer-footer']}>{children}</div>
Drawer.Footer = Footer;

export default Drawer