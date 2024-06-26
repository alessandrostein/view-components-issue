const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/components/**/*.erb",
    "./app/components/**/*.rb",
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
