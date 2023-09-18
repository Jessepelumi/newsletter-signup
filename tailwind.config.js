/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("assets/images/icon-list.svg")'
      }
    },
  },
  plugins: [],
}

