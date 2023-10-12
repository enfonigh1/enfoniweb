/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadedown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(-5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        fadedown: 'fadedown 1s ease-out'
      },
      
      boxShadow: {
        
        '3xl': ['40px -50px 10px rgba(71,159,9,0.1)', '-2px 1px 30px rgba(0,0,0,0.07)']
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
      },
      colors: {
        'green': '#119E09',
        'deep-green': '#119E09',
        'light-green': '#D5F2D4',
        'purple':'#563D8E',
        'blue': '#01A1CF',
        'shadow-green': '#D5F2D4',
        'color1':'#3FD494',
        'color2':'#0CE301'
      },
      backgroundImage: {
        'hero': "url('/assets/images/banner.png')"
      },
      spacing: {
        '0.25': "1px",
        '128': '32rem',
        '144': '36rem',
        '148': '38rem',
        '150': '40rem',
        '160': '45rem',
        '165': '50rem',
        '170': '60rem',
        '175': '70rem',
        '185': '80rem'
      },
      borderSpacing: {
        '1': "1px"
      },
      
      
    },
  },
  plugins: [],
}