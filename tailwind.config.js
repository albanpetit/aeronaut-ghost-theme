import nodeResolve from '@rollup/plugin-node-resolve';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {
      spacing: {
        "192": "36rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui'),],
  daisyui: {
    themes: [
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
        },
      },
    ],
  }
}