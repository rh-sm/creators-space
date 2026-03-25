/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Literata"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        onix: {
          bg: '#0D0D0D',
          surface: '#161616',
          border: '#2A2A2A',
          text: '#F5F0E8',
          muted: '#8A8480',
          accent: '#C97D3A',
          'accent-light': '#E09550',
        },
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
