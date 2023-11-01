/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rausch': 'var(--vt-c-rausch)',
        'rausch-soft': 'var(--vt-c-rausch-soft)',
        'arches': 'var(--vt-c-arches)',
        'arches-soft': 'var(--vt-c-arches-soft)',
      }
    },
  },
  plugins: [],
}