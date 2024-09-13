/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': 'var(--color-dark-navy)',
        'black': 'var(--color-black)',
        'purple': 'var(--color-purple)',
        'lavender': 'var(--color-lavender)',
        'primary': 'var(--jadu-color-primary)',
        'primary-dark': 'var(--jadu-color-primary-2)',
        'secondary': 'var(--jadu-color-secondary)',
        'tertiary': 'var(--jadu-color-grey)',
        'quaternary': 'var(--jadu-color-dark)',
        'white': 'var(--jadu-color-white)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
