const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: colors.violet,
        secondary: colors.indigo,
        shade: '#00000080',
        material: colors.zinc
      },
      gridTemplateColumns: {
        '2/4/4/4/1': '2fr 4fr 4fr 4fr 1fr',
        '2/4/1': '2fr 4fr 1fr',
        '5/1': '5fr 1fr'
      }
    },
  },
  plugins: [],
};
