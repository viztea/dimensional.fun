import { socials } from 'lib/constants';
import { concat } from 'lib/tools/concat';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type NavbarProps = {
	includeSocials?: boolean;
	className?: string;
};

export default function Navbar({ includeSocials = true, className }: NavbarProps) {
	const router = useRouter();
	const routes = [
		{ href: '/', text: 'home' },
		{ href: '/blog', text: 'blog' },
		{ href: '/projects', text: 'projects' }
	];

	const importantSocials = socials.slice(0, 3);
	return (
		<nav
			className={concat(
				'flex items-center',
				includeSocials ? 'justify-between' : '',
				className ?? ''
			)}
		>
			<div className="flex space-x-1.5">
				{routes.map((route, i) => (
					<Link key={i} href={route.href} passHref>
						<a
							className={concat(
								'text-gray-200 ml-[-0.60rem] my-6 transition px-3 py-2 rounded-lg hover:bg-opacity-25 hover:bg-gray-800',
								router.pathname === route.href ? 'font-bold' : ''
							)}
						>
							{route.text}
						</a>
					</Link>
				))}
			</div>
			{includeSocials && (
				<div className="flex space-x-4">
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
