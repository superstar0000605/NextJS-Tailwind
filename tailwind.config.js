/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        main: "1172px",
      },
      spacing: {
        558: "558px",
      },
      lineHeight: {
        '70': '70px',
      },
      width: {
        '550': '550px'
      }
    },
    colors: {
      primary: "#06060E",
      secondary: "#5383FF",
      faq: "#14141d",
      faq_light: '#DCDCE0',
      text_secondary: "#B5B4C1",
      text_secondary_light: "rgba(6, 6, 14, 0.75)",
      text_primary: "rgba(255, 255, 255, 0.58)",
      white: "#fff",
      black: '#000',  
      text_light: "#06060E",
      badge: 'rgba(255, 255, 255, 0.17)',
      badge_light: 'rgba(0, 0, 0, 0.06)',
      border_light: 'rgba(20, 20, 29)'
    },
  },
  plugins: [],
};
