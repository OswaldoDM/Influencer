/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
        myPurple:'#4F46BA',
        myLightSky: "#DAE8FE",
        myOrange: "#F9896B",
        myLightBlue: "#00E1F0",
        myLightGreen: "#2FE6C8",
        myLightGray: "#DBDDE2",        
        myDarkBlue: "#002F86",
        myBlack: "#2D2D2D",
        myTpurple:"#5046ba61"
      },

      backgroundImage: {
        'CTA-pattern': "url('/src/assets/CTAbg.png')",
        'trial': "url('/src/assets/f.jpg')"
        
      }
    }
  },
  plugins: [],
}
