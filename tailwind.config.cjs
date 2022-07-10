module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
