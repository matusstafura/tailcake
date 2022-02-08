const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        orange: colors.orange,
      },
    },
  },
  plugins: [],
};
