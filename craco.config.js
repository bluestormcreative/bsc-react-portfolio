// craco.config.js
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    { plugin: BabelRcPlugin },
  ],
}
