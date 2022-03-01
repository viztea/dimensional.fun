import { Route, routes, socials } from 'lib/constants';
import { concat } from 'lib/tools/concat';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from 'components/logo';
import { PropsWithClassName } from 'lib/types';
import Button, { ButtonStyle } from 'components/button';

type NavbarProps = {
	includeSocials?: boolean;
	className?: string;
	vertical?: boolean;
	linkIcons?: boolean;
};

export function NavLink({
	name,
	href,
	Icon,
	className,
	includeIcon,
	...props
}: PropsWithClassName<Route & { style?: ButtonStyle; includeIcon?: boolean }>) {
	const router = useRouter();

	return (
		<Link href={href} passHref>
			<Button className={concat(router.pathname === href ? 'font-bold' : '', className)} {...props} link>
				{includeIcon && Icon && <Icon className="mr-3" />}
				{name}
			</Button>
		</Link>
	);
}

export default function Navbar({
	includeSocials = true,
	className,
	vertical,
	linkIcons: includeLinkIcons
}: NavbarProps) {
	const importantSocials = socials.slice(0, 3);

	return (
		<nav
			className={concat(
				'flex items-center',
				includeSocials ? 'justify-between' : '',
				className
			)}
		>
			{vertical && <Logo className="h-28 md:w-28" />}
			<div className={concat('flex space-x-1.5', includeLinkIcons ? '!text-right mr-10' : '')}>
				{routes.map(({ Icon, ...route }, i) => (
					<NavLink {...route} key={i} className="my-6 ml-[-0.60rem]" />
				))}
			</div>
			{includeSocials && (
				<div className={concat('flex', 'space-x-4')}>
					{importantSocials.map(({ Icon, ...social }, i) => (
						<a
							key={i}
							rel="noreferrer noopener"
							target="_blank"
							title={social.title}
							href={social.url}
						>
							<Icon />
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
