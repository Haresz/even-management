/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        redPrimary: '#FF204E',
        redDark: '#A0153E',
        blueDark: '#00224D',
        star: '#ECC94B',
      },
      backgroundImage: {
        heroLanding: "url('../../public/hero-landing.webp')",
      },
    },
  },
  plugins: [],
};
