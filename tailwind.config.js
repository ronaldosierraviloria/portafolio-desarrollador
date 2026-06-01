// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: 'rgba(255, 255, 255, 0.05)',
        glass: 'rgba(255, 255, 255, 0.08)',
        border: 'rgba(255, 255, 255, 0.12)',

        neon: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },

        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
        }
      },

      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Geist', 'Inter', 'sans-serif'],
      },

      backdropBlur: {
        glass: '12px',
      },

      boxShadow: {
        glow: '0 0 20px rgba(59,130,246,0.3)',
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}