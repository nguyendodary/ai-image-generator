/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6469ff',
        'primary-dark': '#4f54e0',
        surface: '#0f0f13',
        surface2: '#16161d',
        surface3: '#1e1e28',
        border: '#2a2a38',
        'text-primary': '#f0f0f5',
        'text-secondary': '#9898b0',
        'text-muted': '#5a5a75',
        success: '#22c55e',
        'success-dark': '#16a34a',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 30px rgba(100, 105, 255, 0.15)',
        glow: '0 0 20px rgba(100, 105, 255, 0.4)',
      },
    },
  },
  plugins: [],
};
