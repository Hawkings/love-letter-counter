import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "inline",

			pwaAssets: {
				disabled: false,
				config: true,
			},

			manifest: {
				name: "love-letter-counter",
				short_name: "love-letter-counter",
				description: "A card counter for the Love Letter board game",
				theme_color: "#ffffff",
			},

			workbox: {
				globPatterns: ["**/*.{js,css,html,svg,png,ico,webp}"],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
			},

			devOptions: {
				enabled: false,
				navigateFallback: "index.html",
				suppressWarnings: true,
				type: "module",
			},
		}),
	],
});
