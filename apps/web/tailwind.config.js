/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        redDark: '#A0153E',
      },
      backgroundImage: {
        heroLanding: "url('../../public/hero-landing.webp')",
      },
    },
  },
  plugins: [],
};
