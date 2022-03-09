module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          h1: { fontSize: '1.875rem' },
          h2: { fontSize: '1.5rem' },
          h3: { fontSize: '1.25rem' },
          h4: { fontSize: '1.125rem' },
          h5: { fontSize: '1rem' },
          h6: { fontSize: '0.875rem' },
          code: { padding: '1rem' }
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}