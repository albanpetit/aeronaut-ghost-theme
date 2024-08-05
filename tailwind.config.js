import nodeResolve from '@rollup/plugin-node-resolve';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {
      aspectRatio: {
          'a4': '21 / 29.7',
      },
      spacing: {
        "112": "28rem",
        "128": "32rem",
        "192": "36rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "rgb(202, 38, 117)",
          "secondary": "#e86d09",
          "accent": "#4f1a4a",
          "neutral": "#f9ae17",
          "base-100": "#fcedf4",
          "base-200": "#efeae6",
          "base-300": "#e7e2df",
          "base-content": "#291334",
        },
      },
    ],
  }
}