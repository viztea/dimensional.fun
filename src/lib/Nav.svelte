<script>
    import { page } from "$app/stores";
    import { socials } from "$lib/socials";
    import Fa from "svelte-fa";

    export let includeSocials = true

    const importantSocials = socials.slice(0, 3);
    const routes = [
        { href: "/", text: "home" },
        { href: "/projects", text: "projects" }
    ]
</script>

<nav class="navbar" class:justify-between={includeSocials}>
    <div class="flex space-x-6">
        {#each routes as route}
            <a href={route.href} class="navbar-link" title="{route.text} page" class:navbar-link-active={$page.path === route.href}>{route.text}</a>
        {/each}
    </div>

    {#if includeSocials}
        <div class="flex space-x-4">
            {#each importantSocials as social}
                <a rel="noreferrer noopener" target="_blank" title={social.title} href={social.url}><Fa fw icon={social.icon}/></a>
            {/each}
        </div>
    {/if}
</nav>

<style>
    :global(.navbar) {
        @apply flex items-center;
    }

    :global(.navbar-link) {
        @apply text-gray-200 transition px-3 py-2 rounded-lg hover:bg-opacity-25 hover:bg-gray-800;
    }

    :global(.navbar-link-active) {
        @apply font-bold
    }
</style>
