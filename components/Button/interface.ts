import { Status, Theme } from "@/interfaces/global"

type ButtonStatus = Status | "accent";

export interface IPropsButton {
    id?: string;
    type: "button" | "submit" | "reset";
    title?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    value?: string;
    theme?: Theme;
    size: "xsmall" | "small" | "medium" | "large";
    variant?: "solid" | "outline" | "neutral" | "text";
    status?: ButtonStatus;
    surface?: "1" | "2";
    content?: "text" | "icon";
    onClick?: any;
    children?: React.ReactNode | string;
}