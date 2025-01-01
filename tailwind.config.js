/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
          primary:"#2e1f94",
          secondary:"#706dff",
      },
    },
  },
  plugins: [],
}

