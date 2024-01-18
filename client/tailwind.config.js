/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
      title: ["Readex Pro", "sans-serif"]
    },
    extend: {
      colors: {
        primary: {
          "ruddy-blue": "#60a5fa",
          "royal-blue": "#2563eb"
        },
        accent: {
          "antiflash-white": "#e5e7eb",
          night: "#0a0a0a"
        }
      }
    }
  },
  plugins: []
};
