import { Theme } from "@/interfaces/global"

export interface IPropsMenuNoLink {
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    iconBefore?: React.ReactElement;
    text?: string;
    iconAfter?: React.ReactElement;
    theme?: Theme;
    onClick: (e: any) => void;
    children?: React.ReactNode;
}