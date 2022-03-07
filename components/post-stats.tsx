import PostInformation from 'components/post-information';
import PostViewCounter from 'components/post-view-counter';
import { Blog } from 'lib/types';

type PostStatsProps = {
	post: Blog;
};

export default function PostStats({ post }: PostStatsProps) {
	return (
		<div className="flex text-xs text-neutral-300 items-center justify-between">
			<PostInformation post={post} />
			<PostViewCounter slug={post.slug} />
		</div>
	);
}
