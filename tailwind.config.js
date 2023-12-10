/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        9: '9',
        5.5: '5.5',
      },
      boxShadow: {
        card: '0px 0px 16px -8px rgba(0,0,0,0.68)',
      },
      screens: {
        sm: { max: '400px' },
        md: { max: '1024px', min: '768px' },
        lg: { min: '1025px' },
      },
    },
  },
  plugins: [],
};
