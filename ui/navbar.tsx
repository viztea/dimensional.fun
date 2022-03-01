import { Route, routes, socials } from 'lib/constants';
import { concat } from 'lib/tools/concat';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from 'components/logo';
import { PropsWithStyling } from 'lib/types';

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
	style
}: PropsWithStyling<Route>) {
	const router = useRouter();

	return (
		<Link href={href} passHref>
			<a
				title={name}
				className={concat(
					'flex items-center text-gray-200 transition px-3 py-2 rounded-lg hover:bg-opacity-25 hover:bg-gray-800',
					router.pathname === href ? 'font-bold' : '',
					className || ''
				)}
				style={style}
			>
				{Icon && <Icon className="mr-3" />}
				{name}
			</a>
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
				vertical ? 'flex-col' : '',
				includeSocials ? 'justify-between' : '',
				className ?? ''
			)}
		>
			{vertical && <Logo className="h-28 md:w-28" />}
			<div
				className={concat(
					'flex',
					vertical ? 'flex-col text-center mb-6 space-y-1.5' : 'space-x-1.5',
					includeLinkIcons ? '!text-right mr-10' : ''
				)}
			>
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
