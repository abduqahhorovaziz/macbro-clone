/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
