export interface IPropsForm {
    id?: string;
    cn?: string;
    style?: React.CSSProperties;
    action: (data: any) => void;
    children?: React.ReactNode;
}