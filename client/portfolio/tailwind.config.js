/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    'gradient-line-black-grey': 'linear-gradient(90deg, black 0%, grey 50%, black 100%)',
        'gradient-line-grey-black': 'linear-gradient(90deg, grey 0%, black 50%, grey 100%)',
        'gradient-circle-black-grey': 'radial-gradient(circle, black 0%, grey 50%, black 100%)',
        'gradient-circle-grey-black': 'radial-gradient(circle, grey 0%, black 50%, grey 100%)',
    },
  },
  plugins: [],
};

