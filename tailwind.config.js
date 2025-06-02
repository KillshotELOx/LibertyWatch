/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'liberty-blue': {
          DEFAULT: '#0A3A60',
          light: '#1E5F8A',
          dark: '#062842',
        },
        'justice-gray': {
          DEFAULT: '#4A5568',
          light: '#718096',
          dark: '#2D3748',
        },
        'accent-gold': '#B8860B',
        'background-light': '#F7FAFC',
        'text-primary': '#1A202C',
        'text-secondary': '#4A5568',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
