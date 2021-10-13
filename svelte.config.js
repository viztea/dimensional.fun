import preprocess from "svelte-preprocess";
import windicss from "vite-plugin-windicss";
import vercel from '@sveltejs/adapter-vercel';

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        target: "#svelte",
        adapter: vercel(),
        vite: {
            plugins: [
                windicss({ config: "windi.config.ts" }),
            ]
        },
    }
};

export default config;
