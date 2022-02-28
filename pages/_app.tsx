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
				<title>melike2d &bull; {pageName}</title>
			</Head>
            <Component {...pageProps} />
		</IconContext.Provider>
	);
}
