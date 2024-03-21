/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
      fontFamily:{
        outfit:["outfit", "sans-serif"]
      },
      animation: {
        "spin-slow": "spin 3s linear infinite"
      }
    },
  },
  plugins: [],
}

