import { Theme } from "@/interfaces/global";

export interface IPropsCheckbox {
    children?: string;
    checked: boolean;
    indeterminate: boolean;
    theme?: Theme;
    size?: "small" | "medium" | "large";
    onChange: () => void
}