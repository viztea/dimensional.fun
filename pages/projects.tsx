import Card, { CardBody, CardFooter, CardHeader, CardTitle } from 'components/card';
import { IconType } from 'react-icons';
import { FaCubes, FaDiscord, FaGithub, FaGuilded, FaLink, FaTwitter } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Layout from 'components/ui/layout';

interface Project {
	name: string;
	summary: string;
	home: string;
	color: string;
	links: { Icon: IconType; href: string }[];
	technologies?: string[];
}

export default function Projects() {
	const projects: Project[] = [
		{
			name: 'Mixtape',
			summary: 'A feature-rich music bot written in Kotlin serving high-quality music to over **3,300** discord servers.',
			home: 'https://mixtape.systems/',
			color: '#F794E0' /* '#B963A5' */,
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
			name: 'KeiryoJS',
			summary: 'A fast distributed nodejs library for interacting with the discord gateway and api.',
			home: 'https://github.com/KeiryoJS',
			color: '#AE8CDE' /* '#795BA2' */,
			links: [
				{ Icon: FaDiscord, href: 'https://discord.gg/Vkbmb8kuH4' },
				{ Icon: FaGithub, href: 'https://github.com/KeiryoJS' }
			],
			technologies: ['typescript', 'websockets']
		},
		{
			name: 'lavaclient',
			summary: 'An easy-to-use, performant, and library independent [lavalink](https://github.com/freyacodes/lavalink) client for node.js v14 or above',
			home: 'https://lavaclient.js.org',
			color: '#fff' /* "#795BA2" */,
			links: [
				{ Icon: FaDiscord, href: 'https://discord.gg/CH9ubGPMV6' },
				{ Icon: FaGithub, href: 'https://github.com/lavaclient' }
			],
			technologies: ['typescript', 'websockets']
		}
	];

	return (
		<Layout
			title="melike2d &bull; projects"
			description="projects im currently working on or have contributed to."
			navbar={{ includeSession: false }}
		>
			<div className="flex flex-col">
				{projects.map((project, i) => (
					<Card className='max-w-lg' key={i}>
						<CardHeader>
							<CardTitle style={{ color: project.color }}>{project.name}</CardTitle>
							<div className="flex space-x-4">
								{project.links.map(({ Icon, href }, i) => (
									<a key={i} href={href} target="_blank">
										<Icon className="shadow-xl" color={project.color} />
									</a>
								))}

								<a title="home page" href={project.home}>
									<FaLink color={project.color} />
								</a>
							</div>
						</CardHeader>
						<CardBody className="prose prose-invert">
							<ReactMarkdown children={project.summary} />

							{project.technologies?.length && (
								<CardFooter className='space-x-2'>
									{project.technologies.map((t, i) => (
										<span key={i}>{t}</span>
									))}
								</CardFooter>
							)}
						</CardBody>
					</Card>
				))}
			</div>
		</Layout>
	);
}
