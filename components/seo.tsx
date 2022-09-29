import Head from 'next/head';
import { useRouter } from 'next/router';

export type SEOProps = {
    description?: string;
	title?: string;
	type?: string;
};

export default function SEO({
	description = 'a 17 y/o high-school student from Califoria',
	title = 'melike2d • full-stack developer',
	type = 'website'
}: SEOProps) {
    const router = useRouter()

	return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={`https://dimensional.fun${router.asPath}`} />
            <meta property="og:url" content={`https://dimensional.fun${router.asPath}`} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="melike2d" />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@melike2d" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
	);
}
