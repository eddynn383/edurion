import { Status, Theme } from "@/interfaces/global";

export interface IPropsText {
    cn?: string;
    id?: string;
    theme?: Theme;
    size?: "small" | "medium" | "large";
    status?: Status;
    children: React.ReactElement | string;
}