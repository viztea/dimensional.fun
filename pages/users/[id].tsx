import Header from 'components/header';
import Layout from 'components/ui/layout';
import fetcher, { Error } from 'lib/fetcher';
import { ApiUser } from 'lib/types';
import { useRouter } from 'next/router';
import React from 'react';
import { FaCalendar, FaComments, FaEnvelope, FaIdCard } from 'react-icons/fa';
import useSWR from 'swr';

export default function User() {
	const { query } = useRouter(),
		id = query.id;

	const { data, error } = useSWR<ApiUser, Error>(() => (id ? `/api/users/${id}` : null), fetcher);
	if (error) {
		return (
			<Layout>
				<Header
					title={
						{
							404: "It looks like this user doesn't exist."
						}[error.status]
					}
				/>
			</Layout>
		);
	}

	return (
		<Layout>
			{data && (
				<div className="space-y-10">
					<div className="relative flex flex-col space-y-3">
						<div className="flex items-center space-x-5">
							<img className="rounded-3xl tblur h-24" src={data.data.image} />
							<div>
								<h1 className="font-bold text-xl">{data.data.name}</h1>
								<p className="text-sm text-gray-200">{data.data.bio}</p>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-1.5 text-xs text-gray-400 ">
							<span className="flex items-center space-x-1.5 hover:text-gray-300">
								<FaIdCard />
								<span>{data.data.id}</span>
							</span>
							<span className="flex items-center space-x-1.5 hover:text-gray-300">
								<FaComments />
								<span>{data.data.pronouns ?? 'no pronouns specified'}</span>
							</span>
							<span className="flex items-center space-x-1.5 hover:text-gray-300">
								<FaCalendar />
								<span>Joined {new Date(data.data.createdAt).toLocaleDateString()}</span>
							</span>
							{data.data.email && (
								<span className="flex items-center space-x-1.5 hover:text-gray-300">
									<FaEnvelope />
									<span>{data.data.email}</span>
								</span>
							)}
						</div>
					</div>
					<div>
						<h1 className="text-xl font-bold">Comments</h1>
						<h2 className="text-md">No comments yet...</h2>
					</div>
				</div>
			)}
			{!data && (
				<div className="space-x-4 animate-pulse opacity-75">
					<div className="relative flex flex-col space-y-4">
						<div className="flex items-center space-x-5">
							<div className="bg-slate-50 rounded-3xl w-24 h-24" />
							<div className="space-y-2">
								<div className="bg-slate-50 rounded-3xl w-24 h-4" />
								<div className="space-y-1.5">
									<div className="bg-slate-50 rounded-3xl w-64 h-2" />
									<div className="bg-slate-50 rounded-3xl w-40 h-2" />	
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-1.5 text-xs text-gray-400 ">
							<div className="flex space-x-1.5">
								<div className="bg-slate-50 rounded-3xl w-3 h-3" />
								<div className="bg-slate-50 rounded-3xl w-44 h-3" />
							</div>
							<div className="flex space-x-1.5">
								<div className="bg-slate-50 rounded-3xl w-3 h-3" />
								<div className="bg-slate-50 rounded-3xl w-44 h-3" />
							</div>
							<div className="flex space-x-1.5">
								<div className="bg-slate-50 rounded-3xl w-3 h-3" />
								<div className="bg-slate-50 rounded-3xl w-44 h-3" />
							</div>
							<div className="flex space-x-1.5">
								<div className="bg-slate-50 rounded-3xl w-3 h-3" />
								<div className="bg-slate-50 rounded-3xl w-44 h-3" />
							</div>
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
}
