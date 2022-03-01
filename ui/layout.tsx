import { PropsWithChildren } from 'react';
import Container from 'components/container';
import Footer from 'ui/footer';
import Navbar from 'ui/navbar';
import SEO, { SEOProps } from '../components/seo';

export default function Layout({ children, ...props }: PropsWithChildren<SEOProps>) {
	return (
		<>
			<SEO {...props} />
			<Container>
				<Navbar />
				{children}
				<Footer />
			</Container>
		</>
	);
}
