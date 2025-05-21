import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/globals.css', // ✅ explicitly include your CSS entry point
],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#0a2540', // Deep navy
          900: '#051b30', // Darker navy
        },
        secondary: {
          400: '#ffc107', // Gold/yellow
          500: '#e6af00', // Darker gold
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
