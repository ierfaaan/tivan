module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {},
      spacing: {},
      colors: {
        greenTheme: '#52b788',
        darkTheme: '#011627',
        blueTheme: '#0077b6',
        primary: 'var(--primaryColor)',
        lightColor: 'var(--lightColor)',
        borderColor: 'var(--borderColor)',
        bgColor: 'var(--bgColor)',
      },
    },
  },
  plugins: [],
}
