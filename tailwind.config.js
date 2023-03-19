/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        family: "Red Hat Display",
      },
      colors: {
        "primary-pale-blue": "hsl(225, 100%, 94%)",
        "primary-bright-blue": "hsl(245, 75%, 52%)",
        "neutral-very-pale-blue": "hsl(225, 100%, 98%)",
        "neutral-desaturated-blue": "hsl(224, 23%, 55%)",
        "neutral-dark-blue": "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
