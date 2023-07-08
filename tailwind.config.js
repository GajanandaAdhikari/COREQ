/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'back-color':'#F7FBEE',
        'boderColor':'#D9D9D9',
        'bcolor':'#858585',
        'pbcolor':'#FF7008',
      },
      screens: {
        'sm': '430px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        '2md': '500px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1800px',
        // => @media (min-width: 1904px) { ... }
      },
    },
  },
  fontFamily:{
    k2d: ["K2D","sans-serif"],
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

    