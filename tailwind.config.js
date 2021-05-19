module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {'1/2': '50vh'},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
