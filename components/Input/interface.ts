import { Status, Theme } from "@/interfaces/global"

export interface IPropsInput {
    id: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    innerRef?: any;
    placeholder?: string;
    label?: string;
    value?: string;
    autoComplete?: any;
    ariaInvalid?: any;
    ariaDescribedBy?: any;
    style?: React.CSSProperties;
    theme?: Theme;
    variant?: "solid" | "outline" | "opposite" | "text";
    size?: "small" | "medium" | "large";
    status?: Status;
    iconBefore?: React.ReactElement;
    iconAfter?: React.ReactElement;
    focus?: boolean;
    onClick?: any;
    onChange?: any;
    onFocus?: any;
    onBlur?: any;
}