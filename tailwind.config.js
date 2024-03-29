/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BG_image': "url('./assets/header_1.svg')",
        'Mobile_bg': 'url("./assets/mobile_bg_1.svg")',
        'bg1': 'url("./assets/bg.png")'
      }
    },
  },
  plugins: [],
}

