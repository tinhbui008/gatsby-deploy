module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    // container: {
    //   screens: {
    //      sm: "100%",
    //      md: "100%",
    //      lg: "1024px",
    //      xl: "1280px"
    //   }
    // },
    extend: {
      animation: {
        fadeInUp: "fadeInUp 2s cubic-bezier(0, 0, 0.2, 1) forwards",
        pulseAnimation: "pulseAnimation 2s ease-in-out infinite",
        // bounceAnimate: 'bounceAnimate 2s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          from: { transform: "translateY(200px)", opacity: 1 },
          to: { transform: "translateY(0px)", opacity: 1 },
        },
        pulseAnimation: {
          from: {
            boxShadow: "0 0 0 0px rgba(255, 255, 255, 0.5)",
          },
          to: {
            boxShadow: "0 0 0 20px rgba(0, 248, 248, 0)",
          },
        },
        // bounceAnimate: {
        //   "0% ": { transform: "translateY(0%)" },
        //   "50%": { transform: "translateY(-10%)" },
        //   // "90% ": { transform: "translateY(0%)" },
        //   // "95%": { transform: "translateY(-5%)" },
        //   // " 97%": { transform: "translateY(0%)" },
        //   // "99%": { transform: "translateY(-5%)" },
        //   "100%": { transform: "translateY(0)" },
        // },
      },
      colors: {
        light_blue: "#0468b1",
        dark_blue: "#001728",
        black: "#231f20",
        trans_white: "rgba(255, 255, 255, 0.8);",
        green: "#47b868",
      },
      flex: {
        100: "0 0 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
