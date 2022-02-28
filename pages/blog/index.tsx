import Container from 'components/container';
import Navbar from 'components/navbar';
import Image from 'next/image';
import Head from 'next/head';
import {join} from 'path';
import fs from 'fs';
import React, { useState, useEffect } from 'react';
import { BlogPostMeta } from 'components/blog-post';
import { FaCalendarAlt } from 'react-icons/fa';
import { concat } from 'lib/tools/concat';

export async function getStaticProps() {
	const dir = join(process.cwd(), "pages", "blog");
	const posts = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));

	return {
		props: { posts }
	};
}

type BlogProps = {
	posts: string[];
}

export default function Blog(props: BlogProps) {
	const [posts, setPosts] = useState<{ file: string, meta: BlogPostMeta }[]>([])
	
	async function getPosts() {
		setPosts(await Promise.all(props.posts.map(async file => ({ file, meta: (await import(`./${file}`)).meta }))) as any)
	}

	useEffect(() => void getPosts(), [ ])
	
	return (
		<Container className="space-y-6">
			<Head>
				<meta name="og:title" content="My blog because why not?" />
			</Head>

			<Navbar />

			<div className="flex flex-col-reverse">
				{posts.map(({ file, meta }, i) => (
					<a
						href={`/blog/${file.slice(0, -4)}`}
						key={i}
						className={concat(
							"flex items-center space-x-6 px-5 py-3 select-none border border-transparent rounded-xl mb-12",
							"hover:border-primary-darker hover:shadow-xl hover:backdrop-blur-3xl hover:bg-primary-dark",
							"ease-in-out transition-all duration-200",
						)}
					>
						<div className="relative h-20 w-20 rounded-full shadow-xl border-primary border">
							<Image
								src="/logo-full.png"
								alt="logo"
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<div className="block">
							<h1 className="text-2xl font-bold">{meta.title}</h1>
							<h2 className="max-w-sm">{meta.subtitle}</h2>
							<p className="text-xs mt-4 flex items-center space-x-2">
								<FaCalendarAlt />
								<span>{new Date(meta.date).toLocaleString()}</span>
							</p>
						</div>
					</a>
				))}
			</div>
		</Container>
	);
}
