import { Theme } from "@/interfaces/global";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IPropsMenuItem {
  id?: string;
  style?: React.CSSProperties;
  item: IMenuItem;
  depthLevel: number;
  theme?: Theme;
}

export interface IMenuItem {
  allowedUsers?: string[];
  icon?: IconProp;
  isPublish?: boolean;
  title: string;
  url: string;
  parentId?: string;
  children?: IMenuItem[];
}
