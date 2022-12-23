/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'neutral-black': '#2B2C34',
        'neutral-100': '#0D0D0D',
        'neutral-90': '#2B2C34',
        'dark-grey' : '#9A9494'
      }
    },
  },
  plugins: [],
}
