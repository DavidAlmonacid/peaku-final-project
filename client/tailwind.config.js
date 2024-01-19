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
          timberwolf: "#d4d4d8", // zinc-300
          "slate-gray": "#6b7280", // gray-500
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
