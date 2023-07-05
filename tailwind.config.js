/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   main_white: "rgb(244 244 245)",
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
    },
  },
  plugins: [],
};
