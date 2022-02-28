import { PropsWithChildren } from 'react';
import Container from 'components/container';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import Head from 'next/head';

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
        <Container>
            <Head>
                <meta name="og:title" content={meta.title} />
                <meta name="og:description" content={meta.subtitle} />
            </Head>
            <Navbar className="mx-auto" />

            <div className="space-y-6 ">
                <div className="space-y">
                    <h1 className="text-4xl font-bold">{meta.title}</h1>
                    <h2 className="text-xl">{meta.subtitle}</h2>
                </div>

                <div className="max-w-lg prose prose-invert">{children}</div>
            </div>

            <Footer />
        </Container>
	);
}
