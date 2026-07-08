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
          cream2: "#F0ECE3",
          text: "#1A1A2E",
          muted: "#6B7280",
          light: "#9CA3AF",
          ok: "#10B981",
          warn: "#F59E0B",
          error: "#EF4444",
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '9.5': '2.375rem',
        '12.5': '3.125rem',
      },
      opacity: {
        '4': '0.04',
        '6': '0.06',
        '8': '0.08',
        '12': '0.12',
        '15': '0.15',
        '18': '0.18',
        '35': '0.35',
        '45': '0.45',
        '62': '0.62',
        '65': '0.65',
      }
    },
  },
  plugins: [],
}
