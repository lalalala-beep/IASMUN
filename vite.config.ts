import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// const config:
export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()]
}));
