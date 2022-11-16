// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		extend: {
			fontFamily: {
				'lora': ['Lora'], // 4 5 6 7
				'inter': ['Inter'], // 1 2 3 4 5 6 7 8 9
				'cinzel': ['Cinzel Decorative'], // 4 7 9
			},
			colors: {
				dika: {
					1: '#1D21E2',
					2: '#7C1DE2',
					3: '#1D83E2',
				},
			}
		},
	},
	plugins: [
		require('tw-elements/dist/plugin')
	],
}
