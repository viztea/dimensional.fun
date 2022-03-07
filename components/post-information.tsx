import { Blog } from "lib/types";

type ReadingTimeProps = {
	post: Blog;
};

export default function PostInformation({ post }: ReadingTimeProps) {
	return (
		<div className='flex space-x-1.5'>
			<span>{new Date(post.date).toDateString()}</span>
			<span>&mdash;</span>
			<span>
				{post.readingTime.text} &bull; {post.readingTime.words} words
			</span>
		</div>
	);
}
