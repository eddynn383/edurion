import { Theme } from "@/interfaces/global"

export interface IPropsAvatar {
    src: string;
    alt: string;
    id?: string;
    style?: React.CSSProperties;
    theme: Theme;
    size: "small" | "medium" | "large";
    type: "square" | "circle";
    onClick?: any;
}