import { Shade, Size } from "@/interfaces/global";

export interface Option {
    value: string;
    key: string | number;
}

export interface IPropsSelect {
    id: string;
    placeholder: string;
    style?: React.CSSProperties;
    width?: string;
    options: Option[];
    isMulti?: boolean;
    isSearchable?: boolean;
    state?: "open" | "close";
    shade?: Shade;
    size?: Size;
    onChange: (value: any) => void;
    onClick?: () => void;
}