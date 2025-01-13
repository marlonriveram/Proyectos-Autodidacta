/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))', 
      },
      minHeight: {
        '400': '400px',
      },
      transitionDuration: {
        '2000': '2s',
      },
      backgroundImage:{
      'degradado':'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))' 
      }
    },
  },
  plugins: [],
}

