import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import Layout from 'components/ui/layout';
import Header from 'components/header';
import PostInformation from 'components/post/info';
import PostViewCounter from 'components/post/views';
import useSWR from 'swr';

export async function getStaticPaths() {
	return {
		paths: allBlogs.map((p) => ({ params: { id: p.id } })),
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const post = allBlogs.find((post) => post.id === params.id);

	return { props: { post } };
}

export default function BlogPost({ post }: { post: Blog }) {
	const Component = useMDXComponent(post.body.code);
	// const { data, error } = useSWR()

	return (
		<Layout title={post.title} description={post.subtitle}>
			<div className="space-y-6 ">
				<div>
					<Header title={post.title} />
					<div className="flex text-xs text-neutral-300 items-center justify-between">
						<PostInformation post={post} />
						<PostViewCounter id={post.id} />
					</div>
				</div>

				<div className="max-w-lg prose prose-invert prose-headings:mt-2 prose-hr:my-10">
					<Component />
				</div>

				<hr />

				<div className='space-y-2'>
					<div className="space-y-1.5">
						<h1 className="font-bold text-2xl">Comments</h1>
						<div>

						</div>

					</div>
				</div>
			</div>
		</Layout>
	);
}
