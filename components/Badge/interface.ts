import { Status, Theme } from "@/interfaces/global";

export interface IPropsBadge {
    id?: string,
    value: number,
    title?: string,
    style?: React.CSSProperties,
    max?: number,
    size: "small" | "medium" | "large",
    status?: "accent" | Status,
    children?: React.ReactElement | string
}