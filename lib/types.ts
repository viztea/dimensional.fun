import { CSSProperties } from "react";

export type PropsWithStyling<T> = { className?: string; style?: CSSProperties } & T;