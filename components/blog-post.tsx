import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Layout from 'ui/layout';

type BlogPostProps = {
	meta: BlogPostMeta;
};

export interface BlogPostMeta {
	title: string;
	subtitle: string;
	date: string;
}

export default function BlogPost({ meta, children }: PropsWithChildren<BlogPostProps>) {
	return (
		<Layout>
			<Head>
				<meta name="og:title" content={`melike2d &bull; ${meta.title}`} />
				<meta name="og:description" content={meta.subtitle} />
				<meta name="description" content={meta.subtitle} />
			</Head>
			<div className="space-y-6 ">
				<div className="space-y">
					<h1 className="text-4xl font-bold">{meta.title}</h1>
					<h2 className="text-xl">{meta.subtitle}</h2>
				</div>

				<div className="max-w-lg prose prose-invert">{children}</div>
			</div>
		</Layout>
	);
}
