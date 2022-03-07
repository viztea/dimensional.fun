import Button from 'components/button';
import Header from 'components/header';
import Layout from 'components/ui/layout';
import { InferGetServerSidePropsType } from 'next';
import { getProviders, signIn } from 'next-auth/react';

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers }
	};
}

export default function Login({
	providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Layout navbar={{ includeSession: false }}>
			<Header title="Login" subtitle="Redirect yourself to one of these snazzy websites." />
			<div className="flex space-x-2.5">
				{Object.values(providers).map((provider) => (
					<Button
						key={provider.name}
						onClick={() => signIn(provider.id, { callbackUrl: '/users/@me' })}
						className="select-none cursor-pointer"
						style={"primary"}
						clickable
					>
						Login with{" "}<span className="font-bold">{provider.name}</span>
					</Button>
				))}
			</div>
		</Layout>
	);
}
