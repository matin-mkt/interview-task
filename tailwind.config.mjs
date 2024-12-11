/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1850px",
        1300: "1300px",
        1440: "1439px",
        1600: "1600px",
        1700: "1700px",
        1800: "1800px",
      },
      colors: {
        primaryBlue: "#3F88F4",
        blackishBlue: "#191a2b",
        darkBlue: "#222337",
        primaryGray: "#80889C",
        grayFooter: "#A6ABB8",
        borderButton: "#C1C1C",
        borderColor: "#4C485B",
        cardBlue: "#213053",
        warning: "#EAB22C",
        placeholder: "#71767D",
        "light-grey": "#E3E3E3",
        grey: "#9193A8",
        "bg-color": "#000917",
        success: "#3BC92E",
        alert: "#F0E93C",
        failed: "#E33412",
        darkGray: "#303142",
        primaryGreen: "#27B14C",
        borderGray: "#E5E6E9",
        error: "#F43F3F",
        blueBlog: "#264171",
        activeBlue: "#236EDB",
        grayBlog: "#595A68",
        expired: "#aeaeae",
        textGray: "#D3D6DD",
        planYellow: "#FFD260",
        planBg: "#1D253F",
        planBorder: "#373846",
      },
      fontFamily: {
        moderat: "var(--font-moderat)",
        sunset: "var(--font-sunset)",
      },
      borderRadius: {
        50: "50px",
        20: "20px",
        10: "10px",
        15: "15px",
        5: "5px",
      },
      fontSize: {
        "6xl": [
          "55px",
          {
            lineHeight: "67.05px",
          },
        ],
        15: [
          "15px",
          {
            lineHeight: "20px",
          },
        ],
        45: [
          "45px",
          {
            lineHeight: "58.5px",
          },
        ],
      },
    },
  },
  plugins: [],
};
