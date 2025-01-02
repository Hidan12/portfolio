/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveleft:{
          '0%':{transform:'translateX(-100%)'},
          '100%':{transform:'translateX(0%)'}
        },
        center:{
          "0%": {transform: "perspective(800px) rotateY(-25deg) scale(.8) rotateX(10deg)"},
          "100%":{transform: "perspective(800px) rotateY(-2deg) scale(1.0) rotateX(0deg)"}
        }
      },
      animation:{
        moveleft: 'moveleft 1s forwards linear',
        center: 'center 1s forwards'
      }
    },
  },
  plugins: [],
}

