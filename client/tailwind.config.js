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
          "ruddy-blue": "#60a5fa", // blue-400
          "royal-blue": "#2563eb" // blue-600
        },
        accent: {
          "antiflash-white": "#e5e7eb", // gray-200
          "eerie-black": "#18181b", // zinc-900
          night: "#0a0a0a" // neutral-950
        }
      },
      screens: {
        xs: "475px"
      }
    }
  },
  plugins: []
};
