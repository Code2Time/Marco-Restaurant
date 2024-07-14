/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "gray1" : "#373737",
        "gray-2" : "#2e3036",
        "gray3" : "#f9f9ff",
        "red1" : "#f42f2c"
      },
      backgroundColor :{
        "bg-gray1" : "#373737",
        "bg-gray-2" : "#2e3036",
        "bg-gray3" : "#f9f9ff",
        "bg-red1" : "#f42f2c"

      },
      screens :{
        screens: {
          sm: "390px",
          // => @media (min-width: 380px) { ... }
  
          md: "768px",
          // => @media (min-width: 768px) { ... }

           smd : "999px",

         //  @media (min-width: 999px) { ... }
          lg: "1024px",
          // => @media (min-width: 1024px) { ... }
  
          xl: "1280px",
          // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: [],
}}