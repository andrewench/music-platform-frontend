/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      'mpl-white': '#fff',
      'mpl-accent-color': '#308fff',

      'mpl-grey-1': '#e1e1e1',
      'mpl-grey-2': '#909090',
      'mpl-grey-3': '#626262',
      'mpl-grey-4': '#3c3c3c',

      'mpl-bd': '#d1d1d1',

      'mpl-red': '#ff3d3d'
    },
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      borderColor: {
        'transparent': 'transparent'
      },
      borderRadius: {
        'mpl': '6px'
      }
    },
  },
  plugins: [],
}
