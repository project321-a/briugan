/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1D3A",
          navy2: "#0e2347",
          navy3: "#162d52",
          gold: "#D4AF37",
          gold2: "#b8952c",
          cream: "#FBF9F5",
          cream2: "#EDE8DE",
          charcoal: "#1A1A2E",
        },
        portal: {
          n: "#0B1D3A",
          g: "#D4AF37",
          cr: "#FBF9F5",
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
