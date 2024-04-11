/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(33, 33, 33, 0.1) 0px 2px 5px",
        custom_hover: "rgba(33, 33, 33, 0.2) 0px 4px 10px",
        big_button: "rgba(0, 0, 0, 0.25) 1px 2px 5px 1px",
        big_button_hover: "rgba(0, 0, 0, 0.4) 2px 4px 10px 1px",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [],
};
