import type { Config } from 'tailwindcss'

// Colour rules
//   ledger  = actions only (buttons, links that do something)
//   stamp   = the figure or tag that matters on a page
//   graphite = quiet information
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-zilla)', 'Georgia', 'serif'],
        sans: ['var(--font-public)', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#F2F2EE',
        ink: '#1B1D1A',
        graphite: '#4A4E48',
        rule: '#CFCFC6',
        ledger: { DEFAULT: '#17402F', dark: '#0F2E21' },
        stamp: '#B8321F',
      },
    },
  },
  plugins: [],
}

export default config
