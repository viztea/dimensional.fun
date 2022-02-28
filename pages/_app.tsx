import '../styles/global.css';
import '../styles/prism-theme.css';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons/lib';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const pageName = router.pathname.slice(1) || "home";

	return (
		<IconContext.Provider
			value={{
				style: {
					width: '1.25em',
					height: '1em',
					textAlign: 'center',
					verticalAlign: '-.125em',
					transformOrigin: 'center',
					overflow: 'visible'
				}
			}}
		>
			<Head>
				<meta name="og:title" content="melike2d &bull; {pageName}" />
	    		<meta name="theme-color" content="#0a75cd" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#2d89ef"/>
				<title>melike2d &bull; {pageName}</title>
			</Head>
            <Component {...pageProps} />
		</IconContext.Provider>
	);
}
