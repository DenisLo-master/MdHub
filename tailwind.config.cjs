/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Camaufalge"],
        body: ["Helvetica"]
      },
      colors: {
        primary: '#48ABC8',
        dark: "#3F3F3F",
        virtualDoctor: "#A293FF",
        mentalHealth: "#F6BA21",
        onlinePharmacy: "#90C387",
        diagnostics: "#F6A9CB",
        nursingHomecare: "#F78839"
      },
      backgroundImage: {
        forYouHero: "url('./src/assets/for-you-header-bg.png')",
        forYouBottom: "url('./src/assets/for-you-bottom.png')",
        linearGradientPrimary: "linear-gradient(360deg, #48ABC8 0%, #8BD5EA 100%)"
      },
      boxShadow: {
        white: "-1px 1px 10px 1px rgba(255,255,255,0.90)",
        dark: "-1px 1px 20px 2px rgba(130,133,134,0.75)",
        cardService: "0px 6px 4px rgba(72, 171, 200, 0.4)",
        input: "0px 6px 4px rgba(72, 171, 200, 0.4)",
        glow: "0 0 10px 8px rgba(72, 171, 224, 0.5),0 0 10px 6px rgba(235, 236, 202, 0.4),0 0 10px 5px rgba(235, 236, 202, 0.6),0 0 10px 8px rgba(235, 236, 202, 0.3)",
        sliderNav: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        corporateCard: "0px 6px 4px rgba(72, 171, 200, 0.4)"
      },
      screens: {
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
}
