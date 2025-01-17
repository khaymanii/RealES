import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: 'rgb(12, 38, 69)', 
        customBlue2: 'rgb(3, 5, 22)',   
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        scrollRight: 'scrollRight 20s linear infinite',
        scrollLeft: 'scrollLeft 20s linear infinite',
       "border-rotate": "borderRotate 3s infinite linear",
      },
      keyframes: {
        scrollRight: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX -(100%)' },
        },
        borderRotate: {
          "0%": {
            borderTopColor: "#60a6e7",
            borderRightColor: "#60a6e7",
            borderBottomColor: "#030516",
            borderLeftColor: "#030516",
          },
          "25%": {
            borderTopColor: "#030516",
            borderRightColor: "#60a6e7",
            borderBottomColor: "#60a6e7",
            borderLeftColor: "#030516",
          },
          "50%": {
            borderTopColor: "#030516",
            borderRightColor: "#030516",
            borderBottomColor: "#60a6e7",
            borderLeftColor: "#60a6e7",
          },
          "75%": {
            borderTopColor: "#60a6e7",
            borderRightColor: "#030516",
            borderBottomColor: "#030516",
            borderLeftColor: "#60a6e7",
          },
          "100%": {
            borderTopColor: "#60a6e7",
            borderRightColor: "#60a6e7",
            borderBottomColor: "#030516",
            borderLeftColor: "#030516",
          },
        },
      },
      backgroundImage : {
        "custom-gradient": "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)"
      }
    },
  },
  plugins: [],
} satisfies Config;
