import fetcher from "lib/fetcher";
import { ApiPost, PropsWithStyling } from "lib/types";
import { useEffect } from "react";
import useSWR from "swr";

export default function PostViewCounter({ slug, isFeed = false, ...props }: PropsWithStyling<{ isFeed?: boolean, slug: string; }>) {
	const { data } = useSWR<ApiPost>(`/api/posts/${slug}`, fetcher),
		views = Number(data?.data);

	if (!isFeed) {
		useEffect(() => void fetch(`/api/posts/${slug}`, { method: 'POST' }), [slug]);
	}

	return <span {...props}>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
