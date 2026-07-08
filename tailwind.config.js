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
          navy: "#0a1128",
          gold: "#d4af37",
          charcoal: "#1c1c1c",
          slate: "#334155",
          cream: "#fffdf5",
        },
        portal: {
          n: "#0B1D3A",
          n2: "#0e2347",
          g: "#D4AF37",
          g2: "#9C7A1E",
          cr: "#FBF9F5",
          cr2: "#EDE8DE",
          tx: "#1A1A2E",
          mu: "#6B7280",
          li: "#9CA3AF",
          wh: "#fff",
          bd: "#E5E7EB",
          bd2: "#D1D5DB",
          ok: "#10B981",
          wn: "#F59E0B",
          er: "#EF4444",
          inf: "#3B82F6",
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'portal-r': '10px',
      }
    },
  },
  plugins: [],
}
