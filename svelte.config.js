/** @type {import("@sveltejs/kit").Config} */
// import { windi } from "svelte-windicss-preprocess";
import preprocess from "svelte-preprocess";
import windicss from "vite-plugin-windicss";

const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        vite: {
            plugins: [
                windicss({ config: "windi.config.ts" }),
            ]
        },
    }
};

export default config;
