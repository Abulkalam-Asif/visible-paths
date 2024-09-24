import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        accent1: "#B22234",
        accent2: "#EEE5E2",
        accent3: "#F6F4F1",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        dropdown: "0 0 2px 0px rgba(238, 229, 226, 1)",
        pricing: "0px 0px 7.49px 7.49px rgba(0, 0, 0, 0.1)",
        "team-card": "0px 0px 6px 1px rgba(0, 0, 0, 0.18)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      backgroundImage: {
        "testimonials-img": "url('/images/testimonials.webp')",
        "footer-img": "url('/images/footer.webp')",
        "revolutionizingSec-img": "url('/images/revolutionizingSec.webp')",
        "video-img": "url('/images/videoBg.webp')",
      },

      transitionProperty: {
        "outline-color": "outline-color",
        "grid-rows": "grid-template-rows",
        top: "top",
        left: "left",
      },
      fontSize: {
        xxs: "0.625rem",
        "1.5xl": "1.375rem",
        "2.5xl": "1.75rem",
        "5.5xl": "3.5rem",
        "7.5xl": "5rem",
      },
      scale: {
        "115": "1.15",
      },
    },
  },
  plugins: [],
};
export default config;
