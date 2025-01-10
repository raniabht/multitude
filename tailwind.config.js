/** @type {import('tailwindcss').Config} */
module.exports = { 

  content: ["./src/**/*.{js,jsx,ts,tsx}"], 

  theme: { 

      extend: {
        fontFamily: {
          asap: ['Asap', 'sans-serif'], 
          edu: ['"Edu QLD Beginner"', 'cursive'], 
        },
        height: {
          'vh': '80vh',
          'input': '40px' ,
          'img':'500px',
          'titre':'1vh',
          'header':'20vh',
          'ful':'100vh'
        },
        width:{
          'titre':'60vw',
          'logo':'20vw',
          'titresm':'50vw',
          'logosm':'25vw',
        } ,

        colors:{
          'bg': '#F6F1EB',
          'rouge':'#CD2C2C'
        },
      }, 

  }, 

  plugins: [], 

}; 
