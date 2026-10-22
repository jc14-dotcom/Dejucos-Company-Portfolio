/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Royal Blue
        accent: "#F59E0B", // Gold
        background: "#ffffff", // Light background
        darkbg: "#111827", // Dark mode background
        darktext: "#F9FAFB", // Light text
        secondary: "#FFA500", // Secondary color (Orange)
      },
      boxShadow: {
        "accent-glow": "0 0 20px rgba(245, 158, 11, 0.35)", //glow using the accent color
        // NEW: Subtle soft shadow for light mode cards
        "card-light": "0 4px 12px rgba(0, 0, 0, 0.05)",

        // NEW: Subtle soft shadow for dark mode cards
        "card-dark": "0 4px 12px rgba(0, 0, 0, 0.4)",

        // Optional: For hover/active effect on buttons or icons
        "hover-glow": "0 0 12px rgba(255, 165, 0, 0.4)",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
