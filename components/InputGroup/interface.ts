import React from "react";

export interface IPropsInputGroup {
    id?: string;
    layout?: "one" | "two" | "three";
    style?: React.CSSProperties;
    children: React.ReactNode;
}