import { PropsWithChildren } from 'react';
import Container, { ContainerProps } from 'components/container';
import Footer from 'ui/footer';
import Navbar from 'ui/navbar';
import SEO, { SEOProps } from '../components/seo';

type LayoutProps = {
	footer?: boolean;
	navbar?: boolean;
	centered?: boolean;
} & ContainerProps

export default function Layout({ children, footer = true, navbar = true, ...props }: PropsWithChildren<LayoutProps & SEOProps>) {
	return (
		<>
			<SEO {...props} />
			<Container {...props}>
				{navbar && <Navbar />}
				{children}
				{footer && <Footer />}
			</Container>
		</>
	);
}
