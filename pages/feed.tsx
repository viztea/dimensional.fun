import React, { useState } from 'react';
import Container from 'components/container';
import Navbar from 'components/ui/nav/bar';
import SEO from 'components/seo';
import { allBlogs } from '.contentlayer/data';
import { pick } from 'contentlayer/client';
import { concat } from 'lib/tools/concat';
import Card, { CardBody, CardFooter, CardHeader, CardTitle } from 'components/card';
import { Blog } from 'lib/types';
import PostViewCounter from 'components/post/views';
import PostInformation from 'components/post/info';

export function getStaticProps(): { props: FeedProps } {
	const posts = allBlogs.map((post) =>
		pick(post, ['id', 'title', 'subtitle', 'date', 'readingTime'])
	);

	return { props: { posts } };
}

type FeedProps = {
	posts: Blog[];
};

export default function Feed({ posts }: FeedProps) {
	const [searchValue, setSearchValue] = useState('');
	const filteredBlogPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<>
			<SEO title="melike2d &bull; feed" description="feed" />
			<Container className="pb-12 min-w-[392px] max-w-md">
				<Navbar />
				<div
					className={concat('flex flex-col', filteredBlogPosts.length ? '' : ' items-center')}
				>
					<input
						aria-label="Search blog posts"
						id="search"
						type="text"
						placeholder="Search blog posts"
						className="bg-black bg-opacity-50 py-4 rounded-xl w-full h-12 mb-10 shadow-xl"
						onChange={(e) => setSearchValue(e.target.value)}
					/>

					{!filteredBlogPosts.length && (
						<h1 className="text-4xl font-bold">I couldn't find anything.</h1>
					)}

					{filteredBlogPosts.map((post, i) => (
						<BlogPostCard blog={post} key={i} />
					))}
				</div>
			</Container>
		</>
	);
}

function BlogPostCard({ blog: post }: { blog: Blog }) {
	return (
		<a href={`/blog/${post.id}`} className="mb-4">
			<Card>
				<CardHeader>
					<CardTitle>{post.title}</CardTitle>
					<PostViewCounter className='text-xs text-neutral-300' id={post.id} isFeed />
				</CardHeader>
				<CardBody>
					{post.subtitle}
					<CardFooter className='justify-between'>
						<PostInformation post={post} />
					</CardFooter>
				</CardBody>
			</Card>
		</a>
	);
}
