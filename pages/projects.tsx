import Navbar from 'components/navbar';
import Container from 'components/container';
import { IconType } from 'react-icons';
import { FaCubes, FaDiscord, FaGithub, FaGuilded, FaLink, FaTwitter } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Footer from 'components/footer';
import Head from 'next/head';

interface Project {
	title: string;
	desc: string;
	href: string;
	theme: string;
	links: { Icon: IconType; href: string }[];
	technologies?: string[];
}

export default function Projects() {
	const projects: Project[] = [
		{
			title: 'Mixtape',
			desc: 'A feature-rich music bot written in Kotlin serving high-quality music to over **3,300** discord servers.',
			href: 'https://mixtape.systems/',
			theme: "#B963A5" /*'#F794E0'*/,
			links: [
				{ Icon: FaDiscord, href: 'https://mixtape.systems/discord' },
				{ Icon: FaGithub, href: 'https://github.com/mixtape-bot' },
				{ Icon: FaTwitter, href: 'https://twitter.com/MixtapeDiscord' },
				{ Icon: FaGuilded, href: 'https://www.guilded.gg/i/Vkby6R72' },
				{ Icon: FaCubes, href: 'http://mixtape.systems/our-stack' }
			],
			technologies: ['kotlin', 'golang', 'rust', 'rabbitmq', 'microservices']
		},
		{
			title: 'KeiryoJS',
			desc: 'A fast distributed nodejs library for interacting with the discord gateway and api.',
			href: 'https://github.com/KeiryoJS',
			theme: "#795BA2" /* '#AE8CDE' */,
			links: [
				{ Icon: FaDiscord, href: 'https://discord.gg/Vkbmb8kuH4' },
				{ Icon: FaGithub, href: 'https://github.com/KeiryoJS' }
			],
			technologies: ['typescript', 'websockets']
		},
		{
			title: 'lavaclient',
			desc: 'An easy-to-use, performant, and library independent [lavalink](https://github.com/freyacodes/lavalink) client for node.js v14 or above',
			href: 'https://lavaclient.js.org',
			theme: '#1c1c1c' /* "#795BA2" */,
			links: [
				{ Icon: FaDiscord, href: 'https://discord.gg/CH9ubGPMV6' },
				{ Icon: FaGithub, href: 'https://github.com/lavaclient' }
			],
			technologies: ['typescript', 'websockets']
		}
	];

	const desc = "projects im currently working on or have contributed to."
	return (
		<Container>
			<Head>
				<meta name="og:description" content={desc} />
				<meta name="description" content={desc} />
			</Head>
			<Navbar />

			<div className="flex flex-col">
				{projects.map((project, i) => (
					<div
						key={i}
						className="block max-w-lg bg-gray-300 text-gray-900 border-2 border-gray-100 border-solid rounded-xl mb-6 last:mb-0 shadow-xl"
					>
						<div className="flex px-4 py-2 mb-4 bg-gray-100 border-primary-dark border-b-1 justify-between items-center rounded-t-lg">
							<h1 className={'font-bold text-lg'} style={{ color: project.theme }}>
								{project.title}
							</h1>
							<div className="flex space-x-4">
								{project.links.map(({ Icon, href }, i) => (
									<a key={i} href={href} target="_blank">
										<Icon className="shadow-xl" color={project.theme} />
									</a>
								))}

								<a title="home page" href={project.href}>
									<FaLink color={project.theme} />
								</a>
							</div>
						</div>

						<p className="px-4 pb-4 prose text-gray-900">
							<ReactMarkdown children={project.desc} />

							{project.technologies?.length && (
								<div className="flex pt-2 space-x-3 text-gray-700 text-xs">
									{project.technologies.map((t, i) => (
										<span key={i}>{t}</span>
									))}
								</div>
							)}
						</p>
					</div>
				))}
			</div>

			<Footer />
		</Container>
	);
}
