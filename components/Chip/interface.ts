import { Size, Status, Theme } from "@/interfaces/global"

export interface IPropsChip {
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    theme?: Theme;
    size: Size;
    status?: Status;
    onClose?: (e: any) => void;
    children?: React.ReactElement | string;
}