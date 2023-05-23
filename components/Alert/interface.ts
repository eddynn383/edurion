import { Status, Theme } from "@/interfaces/global";

export interface IPropsAlert {
    id?: string;
    style?: React.CSSProperties;
    theme?: Theme;
    variant?: "solid" | "outline" | "standard";
    status: Status;
    position?: "static" | "absolute";
    action?: any;
    delay?: number;
    children?: any;
}