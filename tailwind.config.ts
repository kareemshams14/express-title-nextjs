import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.css',
  ], // ✅ Add comma here
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#0a2540',
          900: '#051b30',
        },
        secondary: {
          400: '#ffc107',
          500: '#e6af00',
        },
        gray: {
          50: '#f9fafb',  // Very light gray (almost white)
          100: '#f3f4f6', // Light gray
          200: '#e5e7eb', // Light gray
          300: '#d1d5db', // Gray
          400: '#9ca3af', // Gray
          500: '#6b7280', // Medium gray
          600: '#4b5563', // Darker gray
          700: '#374151', // Dark gray (good for text)
          800: '#1f2937', // Very dark gray
          900: '#111827', // Almost black
        }
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
};

export default config;
