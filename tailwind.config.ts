import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.css',
  ], // ✅ Add comma here
  theme: {
    extend: {
      colors: {
        'primary': '#0B1F3A',      // Dark Navy: For key UI elements, some backgrounds
        'secondary': '#2CA4D8',    // Sky Blue: For buttons, interactive elements
        'accent': '#F5A623',       // Gold: For sparse highlights, special accents
        'body': '#333333',         // Dark Gray: For main body text
        'heading': '#0B1F3A',      // Dark Navy: For h1, h2, h3 (can be same as primary)
        'light': '#FFFFFF',        // White: For text on dark backgrounds, or as a background color
        'bg-subtle': '#F3F4F6',   // Light Gray: For alternating section backgrounds
        'link': '#2CA4D8',         // Sky Blue: For hyperlinks (matches secondary)
        'link-hover': '#F5A623',  // Gold: For hyperlink hover (matches accent)
        'border-neutral': '#E5E7EB', // Example: gray-200
        // cvError can be kept if still needed, or mapped to a semantic name if desired
        cvError: '#dc2626',    // Red for errors 
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-pt-serif)', 'ui-serif', 'Georgia', 'serif'],
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
