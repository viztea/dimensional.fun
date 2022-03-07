import { routes, socials } from 'lib/constants';
import { concat } from 'lib/tools/concat';
import React from 'react';
import Logo from 'components/logo';
import Session from 'components/ui/nav/session';
import NavLink from 'components/ui/nav/link';

export type NavbarProps = {
	includeSocials?: boolean;
	includeSession?: boolean;
	className?: string;
	vertical?: boolean;
	linkIcons?: boolean;
};

export default function Navbar({
	includeSocials = true,
	includeSession = true,
	className,
	vertical,
	linkIcons: includeLinkIcons
}: NavbarProps) {
const importantSocials = socials.slice(0, 3);

	return (
		<nav
			className={concat('flex items-center', includeSocials ? 'justify-between' : '', className)}
		>
			{vertical && <Logo className="h-28 md:w-28" />}
			<div className={concat('flex space-x-1.5', includeLinkIcons ? '!text-right mr-10' : '')}>
				{routes.map(({ Icon, ...route }, i) => (
					<NavLink {...route} key={i} className="my-6 ml-[-0.60rem]" />
				))}
			</div>
			<div className="flex items-center">
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
				{includeSession && <Session />}
			</div>
		</nav>
	);
}
