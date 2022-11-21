export default {
	ssr: false,

	components: true,

	srcDir: 'src/',

	head: {
		title: 'Offices',

		htmlAttrs: {
			lang: 'en'
		},

		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],

		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	css: ['@/assets/css/main.css'],

	plugins: ['plugins/injection'],

	buildModules: ['@nuxtjs/tailwindcss'],
};
