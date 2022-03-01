import Button from 'components/button';
import Header from 'components/header';
import { routes } from 'lib/constants';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from 'ui/layout';
import { NavLink } from 'ui/navbar';

export default function NotFound() {
	const router = useRouter();

	return (
		<Layout
			title="404 Not Found"
			description="Someone typed in the wrong link lmfao"
			navbar={false}
			footer={false}
			centered
		>
			<Header
				title="Hmmm... looks like you've hit a dead end."
				subtitle="Maybe you should click one of these snazzy buttons."
			/>
			<div className="flex ml-[-0.60rem] mt-4 space-x-1.5">
				<NavLink style="primary" {...routes[0]} />
				<Button onClick={router.back} link>go back</Button>
			</div>
		</Layout>
	);
}
