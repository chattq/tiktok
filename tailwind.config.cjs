/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tiktokPink: '#fe2c55',
        tiktokColorText: 'rgba(22,24,35,.75)'
      },
      fontSize: {
        fontSizeMin: '12px',
        fontSizeName: '15px',
        fontSizeTitle: '14px'
      },
      fontFamily: {
        tiktokFont: '"IBM Plex Sans", SofiaPro, Arial, Tahoma, PingFangSC, sans-serif'
      },
      backgroundImage: {
        'phone-pattern': "url('/public/download.png')",
        'tiktok-bar': "url('/public/tiktokbar.png)"
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')]
}
