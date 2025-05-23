import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.css',
  ], // ✅ Add comma here
  theme: {
    extend: {
      colors: {
        primary: { // Assuming these are existing, keeping them
          800: '#0a2540',
          900: '#051b30',
        },
        secondary: { // Assuming these are existing, keeping them
          400: '#ffc107',
          500: '#e6af00',
        },
        cvBlue: '#00a0e3', // Bright blue
        cvLightBlue: '#7dd3fc', // Lighter blue for accents or hover
        cvDarkBlue: '#005f8b',  // Darker blue for text or secondary elements
        cvBgLight: '#f3f4f6',  // Light gray background
        cvBgMedium: '#e5e7eb', // Medium gray for cards or sections
        cvTextDark: '#1f2937',  // Dark gray for primary text
        cvTextLight: '#f9fafb', // Almost white for text on dark backgrounds
        cvAccent: '#ff6600',   // Orange accent (use sparingly)
        cvError: '#dc2626',    // Red for errors
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'], // Add Barlow
        heading: ['Barlow', 'sans-serif'], // Keep existing heading if it was intended, or it can be removed if barlow is the new heading
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
