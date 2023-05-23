import { Theme } from "@/interfaces/global";

export interface IPropsLabel {
    id?: string;
    htmlFor: string;
    theme?: Theme;
    style?: React.CSSProperties;
    children: React.ReactElement | string;
}