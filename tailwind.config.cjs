const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			...colors
		},
		extend: {}
	},

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#07457E',

					secondary: '#581C87',

					accent: '#1FB2A5',

					neutral: '#191D24',

					'base-100': '#E5E7EB',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};

module.exports = config;
