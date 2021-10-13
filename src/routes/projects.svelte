<script lang="ts">
    import { faDiscord, faGithub, faGuilded, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";
    import Nav from "../lib/Nav.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import { faLink } from "@fortawesome/free-solid-svg-icons";

    interface Project {
        title: string;
        desc: string;
        href: string;
        theme: string;
        links: { icon: IconDefinition; href: string }[];
        technologies?: string[];
    }

    const projects: Project[] = [
        {
            title: "Mixtape",
            desc: "A feature-rich music bot that's written in Kotlin proving high-quality music to over **1,000** discord servers ",
            href: "/mixtape",
            theme: "#f794e0", // "#B963A5"
            links: [
                { icon: faDiscord, href: "https://discord.gg/Vkbmb8kuH4" },
                { icon: faGithub, href: "https://github.com/mixtape-bot" },
                { icon: faTwitter, href: "https://twitter.com/MixtapeDiscord" },
                { icon: faGuilded, href: "https://www.guilded.gg/i/Vkby6R72" }
            ],
            technologies: [ "kotlin", "mongodb", "redis" ]
        },
        {
            title: "KeiryoJS",
            desc: "A fast distributed nodejs library for interacting with the discord gateway and api.",
            href: "https://github.com/KeiryoJS",
            theme: "#ae8cde", // "#795BA2",
            links: [
                { icon: faDiscord, href: "https://discord.gg/Vkbmb8kuH4" },
                { icon: faGithub, href: "https://github.com/KeiryoJS" },
            ],
            technologies: [ "typescript", "websockets" ]
        },
        {
            title: "KyeKillerBot",
            desc: "A **free** multi-purpose discord bot that's designed to be easy-to-use while still being quick and powerful.",
            href: "https://kyekillerbot.xyz",
            theme: "#ce5eff", // "#795BA2",
            links: [
                { icon: faDiscord, href: "https://discord.gg/aNAqxz97bm" },
                { icon: faGithub, href: "https://github.com/KyeKillerBot" },
            ],
            technologies: [ "typescript", "discord.js", "postgresql", "lavaclient" ]
        },
        {
            title: "lavaclient",
            desc: "An easy-to-use, performant, and library independent [lavalink](https://github.com/freyacodes/lavalink) client for node.js v14 or above",
            href: "https://lavaclient.js.org",
            theme: "#ffffff", // "#795BA2",
            links: [
                { icon: faDiscord, href: "https://discord.gg/CH9ubGPMV6" },
                { icon: faGithub, href: "https://github.com/lavaclient" },
            ],
            technologies: [ "typescript", "websockets" ]
        }
    ]

    const desc = "active projects i've made or contributed to"
</script>

<svelte:head>
    <title>melike2d &bull; projects</title>
    <meta name="og:description" content={desc}>
    <meta name="description" content={desc}>
</svelte:head>

<div class="flex h-screen px-4 md:p-0">
    <div class="mx-auto">
        <Nav/>

        <div class="flex flex-col">
            {#each projects as { title, links, desc, theme, href, technologies }}
                <div class="block bg-gray-900 border-2 border-gray-800 border-solid rounded-xl mb-6 last:mb-0 shadow-xl">
                    <div class="flex px-4 py-2 mb-4 bg-gray-800 border-gray-800 border-b-1 justify-between items-center rounded-t-lg">
                        <h1 class="font-bold text-lg" style="color: {theme}">{title}</h1>
                        <div class="flex space-x-4">
                            {#each links as link}
                                <a href={link.href}>
                                    <Fa fw icon={link.icon} class="shadow-xl" style="color: {theme}"/>
                                </a>
                            {/each}

                            <a title="home page" href={href}>
                                <Fa fw icon={faLink} style="color: {theme}"/>
                            </a>
                        </div>
                    </div>

                    <p class="px-4 pb-4 prose text-gray-300">
                        <svelte:component this={SvelteMarkdown} source={desc}/>

                        {#if !!technologies}
                            <div class="flex pt-2 space-x-3 text-gray-500 text-xs">
                                {#each technologies as technology}
                                    <span>{technology}</span>
                                {/each}
                            </div>
                        {/if}
                    </p>
                </div>
            {/each}
        </div>

        <footer class="text-center py-8 text-gray-600 text-sm font-light">
            <p>Copyright &copy; dimensional fun / melike2d 2018 - 2021</p>
<!--            {new Date().getFullYear()}-->
        </footer>
    </div>
</div>

<style>
    :global(.navbar-link) {
        @apply ml-[-0.60rem] my-6
    }

    :global(.prose strong) {
        color: white!important;
    }

    :global(.prose a) {
        color: inherit;
        text-decoration: underline;
    }
</style>
