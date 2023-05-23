import { Theme } from "@/interfaces/global";
import { IMenuItem } from "../MenuItem/interface";

export interface IPropsMenuDropdown {
    items?: IMenuItem[];
    parent: string;
    show: any;
    setShow: any;
    theme?: Theme;
    depthLevel: number;
}