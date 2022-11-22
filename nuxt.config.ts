// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		layoutTransition: { name: 'layout', mode: 'out-in' },
		pageTransition: { name: 'page', mode: 'out-in' },
  },
	modules: ["@nuxtjs/tailwindcss"],
	typescript: {
    strict: true
  }
});
