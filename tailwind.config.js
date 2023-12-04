/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.html"],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color', // Tambahkan properti transisi untuk perubahan warna
        'border-color': 'border-color',
      },
    },
  },
  plugins: [],
};
