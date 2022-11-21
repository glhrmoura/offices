module.exports = {
	theme: {
		extend: {
			inset: theme => theme('spacing'),

			transformOrigin: {
				'center-top': 'center top'
			},

			transitionProperty: {
				'location-card-header': 'background-color, border-radius'
			}
		},

		colors: {
			black: '#000',

			white: '#fff',

			gray: {
				100: '#E8EDF3',
				200: '#989EA7',
				900: '#313E4F'
			},

			red: {
				200: '#FF7B92'
			},

			yellow: {
				400: '#FFC062'
			},

			blue: {
				400: '#33A6BA'
			}
		},

		borderWidth: {
			0: '0',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px'
		},

		borderColor: theme => theme('colors'),

		borderStyle: {
			solid: 'solid'
		},

		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'6xl': '4rem'
		},

		borderRadius: {
			1: '0.25rem',
			2: '0.5rem',
		},

		boxShadow: {
			none: 'none',
			sm: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
			lg: '0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)'
		},

		lineHeight: {
			1: '50%',
			2: '100%',
			3: '150%',
			4: '200%'
		},

		spacing: {
			'0': '0',
			'1': '0.25rem',
			'2': '0.5rem',
			'3': '0.75rem',
			'4': '1rem',
			'5': '1.25rem',
			'6': '1.5rem',
			'8': '2rem',
			'10': '2.5rem',
			'12': '3rem',
			'24': '6rem',
			'32': '8rem',
			'80': '20rem'
		},

		padding: theme => theme('spacing'),

		height: theme => ({
			...theme('spacing'),
			auto: 'auto',
			full: '100%',
			screen: '100vw'
		}),

		width: theme => ({
			...theme('spacing'),
			auto: 'auto',
			full: '100%',
			screen: '100vw'
		})
	},

	variants: {
		borderRadius: ['responsive', 'hover', 'focus', 'disabled'],
		pointerEvents: ['responsive', 'hover', 'focus', 'disabled'],
		opacity: ['responsive', 'hover', 'focus', 'disabled'],
		backgroundColor: ['responsive', 'hover', 'focus', 'disabled']
	}
};
