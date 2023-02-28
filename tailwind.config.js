/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      josefinSlab: ["Josefin Slab", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        sir: {
          primary: {
            DEFAULT: "var(--primary-color)",
          },
          secondary: {
            DEFAULT: "#00AB55",
            light: "var(--secondary-light)",
          },
          darkGray: "#666666",
          lightGray: "#fafafa",
          mediumGray: "#F8F8F8",
          error: "#f61010",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
