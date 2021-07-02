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
        1024: '59rem',
        768: '42rem'
      },
      colors: {
        brand: '#ff6947'
      },
      dropShadow: {
        'custom': '0 5px 5px rgba(0, 0, 0, 0.04)',
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
