module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js", "./src/*.js", "./public/index.html"],
  },
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
        brand: {
          DEFAULT: '#ff6947',
          light: '#ffe6e0'
        },
        floralWhite: '#f6f3ec',
        crayola: {
          DEFAULT: '#f7c84f',
          light: '#ffeec2'
        }
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
