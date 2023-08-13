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
      'mpl-grey-5': '#d9d9d9',

      'mpl-bd': '#d1d1d1',

      'mpl-red': '#ff3d3d',

      'mpl-online': '#00c5f0',
      'mpl-offline': '#9cedff',
    },
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      borderColor: {
        transparent: 'transparent',
      },
      borderRadius: {
        mpl: '6px',
      },
      boxShadow: {
        box: '0 10px 30px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
