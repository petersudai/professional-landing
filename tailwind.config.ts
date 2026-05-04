import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        slate: {
          950: '#020617',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'dot-pattern':
          'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
        'dot-md': '32px 32px',
      },
      boxShadow: {
        'brand-sm': '0 4px 14px 0 rgba(180, 83, 9, 0.25)',
        'brand-md': '0 8px 25px 0 rgba(180, 83, 9, 0.3)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.10)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.21, 0.47, 0.32, 0.98)',
      },
    },
  },
  plugins: [],
}

export default config
