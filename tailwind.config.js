/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    // Add your component classes here to prevent them from being purged
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
