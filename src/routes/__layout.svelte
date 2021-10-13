<script>
    import "virtual:windi.css"
    // if you want to enable windi devtools
    import { browser } from "$app/env";
    if (browser) import("virtual:windi-devtools")
</script>

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

