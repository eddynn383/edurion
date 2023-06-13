import { Size, Theme } from "@/interfaces/global";

export interface IPropsLabel {
    id?: string;
    htmlFor: string;
    size?: Size;
    style?: React.CSSProperties;
    children: React.ReactElement | string;
}