module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        opacity: 'opacity',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      spacing: {
        1024: '64rem'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['focus']
    },
  },
  plugins: [],
}
