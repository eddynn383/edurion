import { Theme } from "@/interfaces/global";

export interface IPropsModal {
    id?: string,
    title?: string,
    style?: React.CSSProperties,
    theme?: Theme,
    state: "open" | "close",
    onClickOutside?: () => void,
    onClose?: () => void,
    onCancel?: () => void,
    onConfirm?: () => void,
    children: React.ReactNode | string
}