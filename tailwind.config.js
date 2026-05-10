/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f0f0f5',
          100: '#d0d0e0',
          200: '#a0a0c0',
          300: '#7070a0',
          400: '#404080',
          500: '#1a1a3e',
          600: '#12122e',
          700: '#0a0a1e',
          800: '#050510',
          900: '#020208',
        },
        neon: {
          cyan: '#00d4ff',
          teal: '#00f5d4',
          purple: '#7c3aed',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
