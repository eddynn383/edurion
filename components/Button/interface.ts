import { Status, Shade, Mode, Size, Content } from "@/interfaces/global"

export interface IPropsButton {
    id?: string;
    type: "button" | "submit" | "reset";
    title?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    selected?: boolean;
    controls?: string,
    size: Size;
    mode?: Mode;
    status?: Status;
    variant?: "solid" | "outline";
    shade?: Shade;
    content?: Content;
    value?: string;
    onClick?: any;
    children?: React.ReactNode | React.ReactNode[] | string;
}