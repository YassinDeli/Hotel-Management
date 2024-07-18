import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";
const{fontFamily} = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#038C7F',
        secondary:'#F2C641',
        tertiary: {
          dark:'#F27405',
          light:'#F2C641',
        },
      },
    },
    fontFamily:{
      /* define a custom font family */
      Poppins:['var(--font-poppins)',...fontFamily.sans]
       
    }
  },
  plugins: []
};
export default config;
