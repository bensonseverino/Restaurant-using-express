/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        gloria: ['Gloria Hallelujah', 'cursive'],
        
      },
    },
  },
  plugins: [],
}