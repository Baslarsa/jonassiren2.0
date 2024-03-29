module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        main: 'rgb(227, 131, 48)',
        black_2: 'rgb(10,10,10)',
        black_trans: 'rgba(0,0,0,0.5)',
        gray_1: 'rgba(17,17,17,1)',
        light: '#ecedeb',
        cray: '#8d8c8a',
        coal: '#363538',
        spotify: '#1DB954',
      },
      height: {
        hero: `calc(100vh - 8rem)`,
        100: '30rem',
        thumb: '20rem',
        logo: '80',
        logo_mobile: '90',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
}
