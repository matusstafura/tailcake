const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,vue,js}"],
    darkMode: "class",
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