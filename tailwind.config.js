const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#D81159',
        secondary: '#FFBC42',
        white: '#f6f9fc',
      },
      screens: {
        'xs': '375px',
      },
    },
    fill: theme => ({
      current: 'currentColor',
      primary: theme('colors.primary'),
    }),
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}
