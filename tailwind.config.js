/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '9': '9',
        '5.5': '5.5',
      },
      height: {
        '32vh': '32vh',
      },
      boxShadow: {
        'card': '0px 0px 16px -8px rgba(0,0,0,0.68)',
      },
    },
  },
  plugins: [],
}