const theme = require('./resources/theme/tailwind.theme.config.js')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./Modules/**/resources/**/*.blade.php",
    "./Modules/**/resources/**/*.js",
    "./Modules/**/resources/**/*.vue",
  ],
  theme,
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ]
}
