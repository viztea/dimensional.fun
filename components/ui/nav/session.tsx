import { useSession } from 'next-auth/react';
import Spinner from 'components/spinner';
import useComponentVisible from 'lib/hooks/useComponentVisible';
import { FaCog, FaUser } from 'react-icons/fa';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { concat } from 'lib/tools/concat';
import Link from 'next/link';

export default function Session() {
	const { data: session, status: sessionStatus } = useSession(),
		loading = sessionStatus === 'loading',
		{ ref, isVisible, setVisible } = useComponentVisible(false);

	if (loading) {
		return <Spinner className="ml-4" />;
	}

	return (
		<div className={concat('nojs-show', loading ? 'hidden' : 'flex')}>
			<noscript>
				<style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
			</noscript>
			{!session && (
				<Link href="/api/auth/signin" passHref>
					<a className="ml-1 p-3 text-blue-400 rounded-lg transition-all ease-in-out duration-100 hover:bg-opacity-25 hover:bg-gray-800"><FaSignInAlt /></a>
				</Link>
			)}
			{session?.user && (
				<div ref={ref} className="relative z-10 ml-4">
					<img
						onClick={() => setVisible(!isVisible)}
						className="rounded-full border-primary border cursor-pointer"
						src={session.user!.image!}
						width="42"
						height="42"
					/>
					<div
						className={concat(
							'absolute flex-col right-0 bg-white border-blue-300 text-gray-900 rounded-xl w-48 mt-1.5',
							isVisible ? 'flex' : 'hidden'
						)}
					>
						<span className="px-4 py-2 rounded-t-xl border-b text-gray-800 select-none">
							Logged in as <span className="font-bold text-gray-900">{session.user.name}</span>
						</span>
						<a
							href="/users/@me"
							className="flex items-center space-x-1.5 px-2 py-2 border-b text-gray-700 hover:bg-gray-200"
						>
							<FaUser />
							<span>Profile</span>
						</a>
						<a
							href="/users/@me/settings"
							className="flex items-center space-x-1.5 px-2 py-2 text-gray-700 hover:bg-gray-200"
						>
							<FaCog />
							<span>Settings</span>
						</a>
						<a
							href="/api/auth/signout"
							className="flex items-center space-x-1.5 px-2 py-2 rounded-b-xl text-red-600 hover:bg-red-600 hover:text-white"
						>
							<FaSignOutAlt />
							<span>Sign out</span>
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
