/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary_0: "#FFFAF5",
        primary_100: "#FFE4C2",
        primary_200: "#FFCD8F",
        primary_300: "#FFB65C",
        primary_400: "#FF9F29",
        primary_500: "#F58700",
        primary_600: "#C26B00",
        primary_700: "#8F4F00",
        primary_800: "#5C3300",
        primary_900: "#291600",

        secondary_0: "#FFFFFF",
        secondary_100: "#D9F2E3",
        secondary_200: "#B3E5C7",
        secondary_300: "#8DD8AA",
        secondary_400: "#40BF72",
        secondary_500: "#33995B",
        secondary_600: "#277244",
        secondary_700: "#1A4D2E",
        secondary_800: "#0D2617",
        secondary_900: "#000000",

        gray_100: "#E6E6E6",
        gray_200: "#CCCCCC",
        gray_300: "#B3B3B3",
        gray_400: "#999999",
        gray_500: "#666666",
        gray_600: "#4D4D4D",
        gray_700: "#333333",
        gray_800: "#1A1A1A",
      },
      fontSize: {
        h1: ["40px", { lineHeight: "48px" }],
        h2: ["32px", { lineHeight: "38.4px" }],
        h3: ["24px", { lineHeight: "28.8px" }],
        h4: ["20px", { lineHeight: "24px" }],

        body1: ["16px", { lineHeight: "24px" }],
        body2: ["14px", { lineHeight: "20px" }],
        body3: ["12px", { lineHeight: "16px" }],
      }
    },
  },
  plugins: [],
};