const path = require("path");

module.exports = {
  plugins: [
    require("tailwindcss")(path.join(__dirname, "tailwind.config.js")),
    require("autoprefixer"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
  ],
};
