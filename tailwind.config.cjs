/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "hot-pink": "#e14761",
        "bg-black": "#000002"
      },
    },
    fontFamily: {
      poppins: ["Poppins"]
    }
  },
  plugins: [],
}
