import { PropsWithChildren } from 'react';
import Container, { ContainerProps } from 'components/container';
import Footer from 'components/ui/footer';
import Navbar, { NavbarProps } from 'components/ui/nav/bar';
import SEO, { SEOProps } from '../seo';

type LayoutProps = {
	footer?: boolean;
	navbar?: NavbarProps | false;
	centered?: boolean;
} & ContainerProps

export default function Layout({ children, footer = true, navbar = {}, ...props }: PropsWithChildren<LayoutProps & SEOProps>) {
	return (
		<>
			<SEO {...props} />
			<Container {...props}>
				{navbar && <Navbar {...navbar} />}
				{children}
				{footer && <Footer />}
			</Container>
		</>
	);
}
