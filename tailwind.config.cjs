/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      fontSizeMin: '12px',
      fontSizeName: '16px',
      fontSizeTitle: '14px'
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
