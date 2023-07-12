/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   beige: "#dbdad4",
    // },

    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
    extend: {
      fontSize: {
        main: "12rem",
      },
      colors: {
        textYellow: "#fffd13",
        textPink: "#ff6c89",
        bgPink: "#e0d3cb",
        bgBeige: "#ffe0c5",
        bgGreen: "#475a51",
      },
    },
  },
  plugins: [],
};
