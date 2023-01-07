/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      tiktokPink: '#fe2c55',
      tiktokColorText: 'rgba(22,24,35,.75)'
    },
    fontSize: {
      fontSizeMin: '12px',
      fontSizeName: '16px',
      fontSizeTitle: '14px'
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
