/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        larkenDemo: ["Larken Demo", "sans-serif"],
        sora: ["Sora", "san-serif"],
        detacher: ["Detacher", "sans-serif"],
        biomeW04Regular: ["BiomeW04-Regular", "sans-serif"]

      }
    },
  },
  plugins: [],
}

