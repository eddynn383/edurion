import { Theme } from "@/interfaces/global";
import { IMenuItem } from "../MenuItem/interface";

export interface IPropsMenu {
    id?: string;
    style?: React.CSSProperties;
    data: IMenuItem[];
    theme?: Theme;
}