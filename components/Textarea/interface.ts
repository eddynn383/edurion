import { Shade, Size, Status } from "@/interfaces/global"

export interface IPropsTextarea {
    id: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    innerRef?: any;
    placeholder?: string;
    rows: number;
    columns: number;
    allowResize: "vertical" | "horizontal" | "both"
    label?: string;
    value?: string;
    required?: boolean;
    autoComplete?: any;
    ariaInvalid?: any;
    ariaDescribedBy?: any;
    style?: React.CSSProperties;
    variant?: "solid" | "outline" | "opposite" | "text";
    shade?: Shade;
    size?: Size;
    status?: Status;
    iconBefore?: React.ReactElement;
    iconAfter?: React.ReactElement;
    focus?: boolean;
    onClick?: any;
    onChange?: any;
    onFocus?: any;
    onBlur?: any;
}