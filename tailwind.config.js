module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
    theme: {
    extend: {
      colors:{
        blue:{
          950: '#042448'
        },
        amber:{
          950: '#7e493a'
        }
      },
      height:{
        "h-screen-scroll": "50vh",
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '4rem',
      },
    },
    screens: {
      sm: '480px',
      md: '640px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1500px',
    }
  },
  
  plugins: [require('@tailwindcss/forms')],
}
