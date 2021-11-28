import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import windicss from 'vite-plugin-windicss';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: vercel(),
		vite: {
			plugins: [windicss({ config: 'windi.config.ts' })]
		}
	}
};

export default config;
