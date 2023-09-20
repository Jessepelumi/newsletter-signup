/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("assets/images/icon-list.svg")'
      },
      colors: {
        primary: {
          "tomato": "hsl(4, 100%, 67%)"
        },
        neutral: {
          "darkSlate": "hsl(234, 29%, 20%)",
          "charcoalGrey": "hsl(235, 18%, 26%)",
          "grey": "hsl(231, 7%, 60%)",
          "white": "hsl(0, 0%, 100%)"
        }
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

