import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{ name: string }>;
export function Label({ children, name }: Props) {
    return <label htmlFor={name} className="text-sm text-sky-100" >{children}</label>
}