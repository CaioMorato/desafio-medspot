module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      red: {
        tomato: '#ff6161',
      },
      orange: {
        'close-appointment': '#ffdda9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
