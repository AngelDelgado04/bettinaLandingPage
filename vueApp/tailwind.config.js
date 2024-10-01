/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  themes: [
      
    ],

  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#452F27",
          "secondary": "#7C411E",
          "accent": "#FFE9D2",
          "tertiary": "D92D24",
          "sunset": "FF6F20",
          "yell": "F3E72B",
          "neutral": "#281b1e",
          "base-100": "#fffbff",
          "info": "#0093ce",
          "success": "#00d442",
          "warning": "#d48800",
          "error": "#ff1c66",
            },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'marcellus': ['Marcellus', 'serif'],
        'afacad': ['Afacad', 'sans-serif'],
        'parisienne': ['Parisienne', 'cursive'],
      }
    }
  }
};
