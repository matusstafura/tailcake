const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  purge: ["./src/**/*.{vue,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
        teal: colors.teal,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
};
