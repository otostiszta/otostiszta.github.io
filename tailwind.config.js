/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eef5',
          100: '#d1ddeb',
          200: '#a3bbe7',
          300: '#7599d3',
          400: '#6889ab',
          500: '#3a5478',
          600: '#2a3f5f',
          700: '#1e2d4a',
          800: '#162038',
          900: '#0f1a2e',
          950: '#080d17',
        },
      },
    },
  },
  plugins: [],
}

