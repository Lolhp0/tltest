export interface InputProps {
    value: string;
    setValue: (x: any) => void;
    enterEvent: (x: any) => void;
    placeholder?: string|undefined;
    minlength?: number|undefined;
    maxlength?: number|undefined;
    classNames?: string|null;
}