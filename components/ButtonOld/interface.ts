import { Size, Status, Theme } from "@/interfaces/global"

type ButtonStatus = Status | "accent";

export interface IPropsButton {
    id?: string;
    type: "button" | "submit" | "reset";
    title?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    value?: string;
    size: Size;
    variant?: "solid" | "outline" | "neutral" | "text";
    status?: ButtonStatus;
    shade?: "100" | "200";
    content?: "text" | "icon";
    onClick?: any;
    children?: React.ReactNode | React.ReactNode[] | string;
}