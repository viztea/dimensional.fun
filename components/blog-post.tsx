import { PropsWithChildren } from 'react';
import Container from './container';
import Footer from './footer';
import Navbar from './navbar';

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
