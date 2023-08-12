/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        larkenDemo: ["Larken Demo", "sans-serif"],
        sora: ["Sora", "san-serif"],
        detacher: ["Detacher", "sans-serif"],
        biomeW04Regular: ["BiomeW04-Regular", "sans-serif"],
        inter: ["Inter", "sans-serif"]

      },
      cursor: {
        // 'fancy': 'url(../assets/cursorclick.svg), pointer',
      },
      animation: {
        'flip': 'flip 5s linear infinite',
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        }
      }

    },
  },
  plugins: [],
}

