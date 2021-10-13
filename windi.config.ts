import typography from "windicss/plugin/typography";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
    theme: {
        extend: {
            colors: {
                primary: "#0a75cd",
                "primary-light": "#30a2ff"
            },
            typography: {
                strong: {
                    color: "#ffffff"
                }
            }
        },
    },
    extract: {
        include: [ "./**/*.svelte" ],
    },
    plugins: [
        typography
    ]
})
