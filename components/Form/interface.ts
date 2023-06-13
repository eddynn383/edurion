export interface IPropsForm {
    id?: string;
    cn?: string;
    style?: React.CSSProperties;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    children?: React.ReactNode;
}