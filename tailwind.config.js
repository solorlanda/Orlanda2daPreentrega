/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        letraTitulos: "'New Amsterdam', system-ui",
        letraH1: "'SUSE', system-ui",
      },
      colors:{
        celesteArgentina: '#85b5e3',
      }
    },
  },
  plugins: [],
}

