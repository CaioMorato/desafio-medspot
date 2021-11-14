module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: {
        'gray-accent': '#eee',
      },
      blue: {
        dark: '#20335e',
      },
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
