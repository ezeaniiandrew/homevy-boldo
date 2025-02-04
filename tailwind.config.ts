import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        green: "var(--green)",
        "light-grey": "var(--light-grey)",
        "grey-blue": "var(--grey-blue)",
        gray: "var(--gray)",
      },
      fontFamily: {
        manrope: ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
