import { CSSProperties } from "react";

export type PropsWithClassName<T> = { className?: string; } & T;
export type PropsWithStyle<T> = { style?: CSSProperties } & T;
export type PropsWithStyling<T> = PropsWithClassName<PropsWithStyle<T>>;