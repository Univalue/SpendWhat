import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), paraglide({
        project: "./project.inlang",
        outdir: "./src/lib/paraglide"
    })],
	server:{
		// https:{
		// 	key:'./certs/key.pem',
		// 	cert:'./certs/cert.pem'
		// },
		host:'0.0.0.0'
	}
});
