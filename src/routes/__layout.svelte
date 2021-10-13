<script>
    import "virtual:windi.css"
    import { page } from "$app/stores";
    import { browser } from "$app/env";
    if (browser) import("virtual:windi-devtools")

    const pageName = $page.path.slice(1) || 'home'
</script>

<svelte:head>
    <title>melike2d &bull; {pageName}</title>
    <meta name="og:title" content="melike2d &bull; {pageName}" >
    <meta name="theme-color" content="#0a75cd" >
</svelte:head>

<main>
    <slot />
</main>

<style windi:preflights:global global>
    body {
        margin: 0;
        background-image: url("/bg.jpg");

        @apply w-screen bg-gray-200 text-gray-100;
    }
</style>

