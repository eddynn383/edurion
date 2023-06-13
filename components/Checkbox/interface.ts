export interface IPropsCheckbox {
    id: string;
    children?: string;
    checked: boolean;
    indeterminate: boolean;
    size?: "S" | "M" | "L";
    onChange: () => void
}