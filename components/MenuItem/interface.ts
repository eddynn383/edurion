import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IPropsMenuItem {
    id?: string;
    style?: React.CSSProperties;
    item: IMenuItem;
    depthLevel: number;
}

export interface IMenuItem {
    id?: string;
    title: string;
    url?: string;
    allowedUsers?: string[];
    icon?: IconProp;
    isPublish?: boolean;
    parentId?: string;
    children?: IMenuItem[];
    onClick?: () => void;
}
