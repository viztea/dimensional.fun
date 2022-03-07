import { CSSProperties } from "react";

export type PropsWithClassName<T> = { className?: string; } & T;
export type PropsWithStyle<T> = { style?: CSSProperties } & T;
export type PropsWithStyling<T> = PropsWithClassName<PropsWithStyle<T>>;

export interface ApiPost {
	success: boolean;
    data: number;
}

export type Blog = {
	slug: string;
	title: string;
	subtitle: string;
	date: string;
	readingTime: { text: string; words: string };
};
