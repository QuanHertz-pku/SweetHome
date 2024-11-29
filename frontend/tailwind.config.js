/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // 默认文字阴影
        },
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // 小文字阴影
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)', // 中等文字阴影
        },
        '.text-shadow-lg': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', // 大文字阴影
        },
        '.text-shadow-xl': {
          textShadow: '8px 8px 15px rgba(0, 0, 0, 0.6)', // 超大文字阴影
        }
      }, ['responsive', 'hover'])
    }
  ]
}
//npx tailwindcss -i ./src/asset/css/input.css -o ./src/asset/css/output.css --watch