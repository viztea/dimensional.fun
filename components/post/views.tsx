import fetcher from "lib/fetcher";
import { ApiPost, PropsWithStyling } from "lib/types";
import { useEffect } from "react";
import useSWR from "swr";

export default function PostViewCounter({ id, isFeed = false, ...props }: PropsWithStyling<{ isFeed?: boolean, id: string; }>) {
	const { data } = useSWR<ApiPost>(`/api/posts/${id}/views`, fetcher),
		views = Number(data?.data);

	if (!isFeed) {
		useEffect(() => void fetch(`/api/posts/${id}/views`, { method: 'POST' }), [id]);
	}

	return <span {...props}>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}