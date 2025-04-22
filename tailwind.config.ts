import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Great Vibes"', '"Dongle"'],
      },
    },
  },
  darkMode: "class", // 다크 모드를 클래스 기반으로 설정
  plugins: [],
};
export default config;
