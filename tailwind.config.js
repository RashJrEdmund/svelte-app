/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      spacing: {
        'width-40px': 'calc(100% - 70px)',
      }
    }
  },
  purge: ["./index.html", './src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
}

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
