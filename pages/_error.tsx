import Button from 'components/button';
import Header from 'components/header';
import Layout from 'ui/layout';

const statuses: Record<number, string> = {
	404: "Couldn't find that page, even though you should be seeing the actual 404 page but whatever.",
	500: 'An error occurred while trying to get your page, please try again later.'
};

function Error({ statusCode }) {
	console.log(statusCode);
	return (
		<Layout navbar={false} footer={false} centered>
			<Header
				title={statusCode ?? '42069'}
				subtitle={
					(statusCode ? statuses[statusCode] : null) ??
					'Idk what went wrong, join our discord server maybe.'
				}
			/>
			<div className="flex ml-[-0.8rem]">
				<Button style="primary" href="https://discord.gg/JrHfSmb" link>
					join discord
				</Button>
			</div>
		</Layout>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
