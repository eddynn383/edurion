import { Status, Theme } from "@/interfaces/global"

export interface IPropsChip {
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    theme?: Theme;
    size: "small" | "medium" | "large";
    status?: Status;
    onClose?: (e: any) => void;
    children?: React.ReactElement | string;
}