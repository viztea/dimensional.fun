module.exports = {
  content: [ "./pages/**/*.tsx", "./components/**/*.tsx" ],
  theme: {
    extend: {
      colors: {
        primary: "#0a75cd",
        "primary-light": "#30a2ff",
        "primary-dark": "#032036",
        "primary-darker": "#02121f",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
