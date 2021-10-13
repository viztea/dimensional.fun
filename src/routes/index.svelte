<script>
    import Fa from "svelte-fa/src/fa.svelte"
    import { socials } from "$lib/socials";

    const desc = "16 y/o high-school junior and full-stack developer from the United States"
</script>

<svelte:head>
    <meta name="og:description" content={desc}>
    <meta name="description" content={desc}>
</svelte:head>

<div class="flex h-screen px-10">
    <div class="block text-center items-center m-auto md:(flex space-x-2)">
        <img src="/logo.png" class="inline-block w-80" alt="text logo"/>
        <div class="block text-center items-center max-w-sm md:max-w-lg md:text-left">
            <h1 class="font-bold text-5xl">melike2d</h1>
            <p class="my-8 prose-sm text-white sm:my-4">{desc}</p>
            <div class="hidden items-center content-center md:(block flex space-x-4)">
                <a title="projects page" href="/projects" class="text-primary-light px-3 py-2 transition-all ml-[-.8rem] rounded-lg hover:(bg-opacity-25 bg-gray-800)">projects</a>
                <div class="hidden md:(flex grid-row-1 gap-y-0 gap-x-4)">
                    {#each socials as social}
                        <a rel="noreferrer noopener" target="_blank" title={social.title} href={social.url}>
                            <Fa fw icon={social.icon}/>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
