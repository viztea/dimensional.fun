import { Route } from 'lib/constants';
import { concat } from 'lib/tools/concat';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { PropsWithClassName } from 'lib/types';
import Button, { ButtonStyle } from 'components/button';

export default function NavLink({
	name,
	href,
	Icon,
	className,
	includeIcon,
}: PropsWithClassName<Route & { style?: ButtonStyle; includeIcon?: boolean }>) {
	const router = useRouter();
	const icon = includeIcon && Icon;

	return (
		<Button
			className={concat(
				router.pathname === href ? 'font-bold' : '',
				className
			)}
			link
		>
			<Link href={href} passHref>
				<a>
					{icon && <Icon className="mr-1.5" />}
					<span>{name}</span>
				</a>
			</Link>
		</Button>
	);
}
