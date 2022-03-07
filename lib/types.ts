import { CSSProperties } from "react";

export type PropsWithClassName<T = {}> = { className?: string; } & T;
export type PropsWithStyle<T = {}> = { style?: CSSProperties } & T;
export type PropsWithStyling<T = {}> = PropsWithClassName<PropsWithStyle<T>>;

export interface ApiPost {
	success: boolean;
    data: number;
}

export type Blog = {
	id: string;
	date: string;
	title: string;
	subtitle: string;
	readingTime: { text: string; words: string };
};

export interface ApiUser {
	success: boolean;
	data: {
		/* public */
		id: string;
		name: string;
		bio: string;
		image: string | null;
		pronouns: string | null;
		createdAt: string;
		/* private */
		email?: string;
		emailVerified?: boolean | null;
	}
}
