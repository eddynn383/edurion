import { Size, Status, Theme } from "@/interfaces/global";

export interface IPropsText {
    cn?: string;
    id?: string;
    size?: Size;
    status?: Status;
    children: React.ReactElement | string;
}