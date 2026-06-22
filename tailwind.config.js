/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {},
      colors: {
        header: "#000D1E",
        custom: "#D7E0EA;",
        custom2: "#787878",
        custom3: "#696969",
        primary: "#DBB268",
        primaryText: "#CCA459",
        secondary: "#EFEFEF",
        block: "#d9d9d9",
        box: "#F8F5ED",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
