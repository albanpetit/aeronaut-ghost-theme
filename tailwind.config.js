import nodeResolve from '@rollup/plugin-node-resolve';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
      extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui'),],
  daisyui: {
    themes: [
      {
        nord: {
          ...require("daisyui/src/theming/themes")["dracula"],
          "--rounded-box": "1.2rem",
          "--rounded-btn": "0.6rem",
        },
      },
    ],
  }
}