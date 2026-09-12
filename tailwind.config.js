/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gym-black':      '#0a0a0a',
        'gym-dark':       '#141414',
        'gym-gray':       '#1e1e1e',
        'gym-gray-light': '#2a2a2a',
        'gym-red':        '#e0102b',
        'gym-red-dark':   '#a50d21',
        'gym-white':      '#f5f5f5',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        heading: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #e0102b 0%, #a50d21 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.95) 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 30px rgba(224, 16, 43, 0.35)',
        'card': '0 10px 40px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
