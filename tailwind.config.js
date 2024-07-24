/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'custom-darkbrown':'#23120B',
        'custom-white':'#F1F1F1',
        'custom-yellow':'#FDB827',
        'custom-blue':'#21209C',
        'custom-fuschia':'#ADACFF',
      },
      fontSize: {
       
        'custom-size': '1.4rem', // Custom size, e.g., 40px
      },
      height: {
        '128': '32rem', // Custom height value (e.g., h-128)
        '144': '36rem', // Another custom height value
        '162': '40rem',
        'screen-90': '90vh', // Example of height using viewport units
      }

    },
  },
  plugins: [],
}

