import { Theme } from "@/interfaces/global";

export interface IPropsDrawer {
    id?: string;
    style?: React.CSSProperties;
    theme?: Theme;
    width: string;
    state: "open" | "close"
    onClickOutside?: () => void;
    children: React.ReactElement | string;
}