module.exports = {
	content: ['./pages/**/*.tsx', './ui/**/*.tsx', './components/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				primary: '#0a75cd',
				'primary-light': '#30a2ff',
				'primary-dark': '#032036',
				'primary-darker': '#02121f'
			},
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
			},
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
