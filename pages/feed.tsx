import React, { useState } from 'react';
import Container from 'components/container';
import Navbar from 'ui/navbar';
import SEO from 'components/seo';
import { allBlogs } from '.contentlayer/data';
import { pick } from 'contentlayer/client';
import { concat } from 'lib/tools/concat';
import Card, { CardBody, CardFooter, CardHeader, CardTitle } from 'components/card';

export function getStaticProps(): { props: FeedProps } {
	const posts = allBlogs.map((post) =>
		pick(post, ['slug', 'title', 'subtitle', 'date', 'readingTime'])
	);

	return { props: { posts } };
}

type Blog = {
	slug: string;
	title: string;
	subtitle: string;
	date: string;
	readingTime: { text: string; words: string };
};

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

function BlogPostCard({ blog }: { blog: Blog }) {
	return (
		<a href={`/blog/${blog.slug}`} className="mb-4">
			<Card>
				<CardHeader>
					<CardTitle>{blog.title}</CardTitle>
				</CardHeader>
				<CardBody>
					{blog.subtitle}
					<CardFooter>
						<span>{new Date(blog.date).toDateString()}</span>
						<span>&mdash;</span>
						<span>
							{blog.readingTime.text} &bull; {blog.readingTime.words} words
						</span>
					</CardFooter>
				</CardBody>
			</Card>
		</a>
	);
	// return (
	// 	<a
	// 		href={`/blog/${blog.slug}`}
	// 		className="bg-black bg-opacity-50 p-4 rounded-lg border border-gray-500 shadow-xl max-w-md mb-4"
	// 	>
	// 		<h2 className="font-bold text-2xl">{blog.title}</h2>
	// 		<h3 className="font-medium text-neutral-200">{blog.subtitle}</h3>
	// 		<span className="flex text-neutral-300 text-xs mt-2.5 font-medium space-x-1">
	// 			<span>{new Date(blog.date).toDateString()}</span>
	// 			<span>&mdash;</span>
	// 			<span>
	// 				{blog.readingTime.text} &bull; {blog.readingTime.words} words
	// 			</span>
	// 		</span>
	// 	</a>
	// );
}
