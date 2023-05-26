import { Status, Theme } from "@/interfaces/global";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IPropsIcon {
    value: IconProp;
    status?: Status;
    shake?: boolean;
    beatFade?: boolean;
    theme?: Theme;
    style?: React.CSSProperties;
}