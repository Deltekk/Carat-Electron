/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,ts}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "grayblue": "#2C2C3AF0",
      },
      backgroundImage:{
        'sunny': "url('/Meteo/Sunny.jpg')",
        'music': "url('/Music.jpg')"
      }
    },
  },
  plugins: [],
}

