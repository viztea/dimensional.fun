import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import Layout from 'ui/layout';
import Header from 'components/header';
import PostStats from 'components/post-stats';
import Giscus from '@giscus/react';
import PostComments from 'components/post-comments';

export async function getStaticPaths() {
	return {
		paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const post = allBlogs.find((post) => post.slug === params.slug);

	return { props: { post } };
}

export default function BlogPost({ post }: { post: Blog }) {
	const Component = useMDXComponent(post.body.code);

	return (
		<Layout title={post.title} description={post.subtitle}>
			<div className="space-y-6 ">
				<div>
					<Header title={post.title} />
					<PostStats post={post} />
				</div>

				<div className="max-w-lg prose prose-invert prose-headings:mt-2 prose-hr:my-10">
					<Component />
				</div>

				<div className="mt-[14px]">
					<PostComments />
				</div>
			</div>
		</Layout>
	);
}
