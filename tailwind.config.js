/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'black-opacity': 'rgba(0, 0, 0, 0.54)',
        'black-opacity-light': 'rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
}
