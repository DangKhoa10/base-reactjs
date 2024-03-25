/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    screens: {
      'mobile': { 'max': '767px' },
      'tablet': { 'min': '768px', 'max': '1023px' },
      'laptop': { 'min': '1024px', 'max': '1439px' },
      'desktop': { 'min': '1440px' },
    },
    extend: {

      colors: {
        primary: {
          50: 'var(--primary-color-50)',
          100: 'var(--primary-color-100)',
          200: 'var(--primary-color-200)',
          300: 'var(--primary-color-300)',
          400: 'var(--primary-color-400)',
          500: 'var(--primary-color-500)',
          600: 'var(--primary-color-600)',
          700: 'var(--primary-color-700)',
          800: 'var(--primary-color-800)',
          900: 'var(--primary-color-900)',
          950: 'var(--primary-color-950)',
          DEFAULT: 'var(--primary-color)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    },
  },
  plugins: [],
}

