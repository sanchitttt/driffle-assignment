/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBlueCircle': 'linear-gradient(109.55deg, rgba(33, 83, 211, 0.4) 13.73%, rgba(39, 103, 123, 0.4) 85.66%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lightBlack': '#1c1c1c'
      },
      screens: {
        'mobile': "0px",
        'desktop': '1000px'
      },
      fontFamily: {
        'main': 'Rooberto'
      }
    },
  },
  plugins: [],
}
