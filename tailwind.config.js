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
        'white': '#ffffff',
        'beige': '#F2F5F7',
        'black': '#000000',
        'gray': '#DEDBDB',
        'smoky': '#8A8A8A',
        'dark-gray': '#3B3B3B',
        'soal': '#212526',
        'orange': '#F05A00',
        'red': '#FC573B'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        prosto: ['Prosto', 'sans-serif']
      },
      fontSize: {
        h1: ['40px', '48px'],
        h2: ['30px', '32px'],
        subtitle: ['20px', '24px'],
        text_choice: ['18px', '20px'],
        text_paragraph: ['16px', '20px'],
        text_mini: ['14px', '16px'],
        shape: ['12px', '14px']
      },
      container: {
        center: true,
        padding: '16px',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '1332px',
        },
      },
    },
    
  },
  plugins: [],
}

