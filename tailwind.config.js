/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BG_image': "url('./assets/Main_bg.png')",
        'Mobile_bg': 'url("./assets/mobile_bg_1.svg")',
        'bg1': 'url("./assets/bg.png")',
        'Nav_bg': "url('./assets/Navbar_bg.png')",
        'Mobile_nav': "url('./assets/mobilenav.png')"
      }
    },
  },
  plugins: [],
}

