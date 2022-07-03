const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      backgroundImage: {
        'wavy-yellow': "url('/images/wavy-border-yellow.svg')",
      },
      colors: {
        blue: '#006073',
        'dark-blue': '#002F3B',
        yellow: '#FBB15B',
        'off-white': '#F0E5D2',
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
