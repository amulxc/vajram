/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure that Tailwind scans all JS/JSX files in src
    './index.html',               // Scan your HTML file too
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }],  // Custom font size for h1
        h2: ['2rem', { lineHeight: '2.25rem' }],    // Custom font size for h2
        h3: ['1.75rem', { lineHeight: '2rem' }],    // Custom font size for h3
        h4: ['1.5rem', { lineHeight: '1.75rem' }],  // Custom font size for h4
        h5: ['1.25rem', { lineHeight: '1.5rem' }],  // Custom font size for h5
        h6: ['1rem', { lineHeight: '1.25rem' }],    // Custom font size for h6
        p: ['1rem', { lineHeight: '1.5rem' }],      // Custom font size for p
        a: ['1rem', { lineHeight: '1.5rem' }],      // Custom font size for a
        span: ['1rem', { lineHeight: '1.5rem' }],   // Custom font size for span
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.h1')[0], lineHeight: theme('fontSize.h1')[1].lineHeight },
        'h2': { fontSize: theme('fontSize.h2')[0], lineHeight: theme('fontSize.h2')[1].lineHeight },
        'h3': { fontSize: theme('fontSize.h3')[0], lineHeight: theme('fontSize.h3')[1].lineHeight },
        'h4': { fontSize: theme('fontSize.h4')[0], lineHeight: theme('fontSize.h4')[1].lineHeight },
        'h5': { fontSize: theme('fontSize.h5')[0], lineHeight: theme('fontSize.h5')[1].lineHeight },
        'h6': { fontSize: theme('fontSize.h6')[0], lineHeight: theme('fontSize.h6')[1].lineHeight },
        'p': { fontSize: theme('fontSize.p')[0], lineHeight: theme('fontSize.p')[1].lineHeight },
        'a': { fontSize: theme('fontSize.a')[0], lineHeight: theme('fontSize.a')[1].lineHeight },
        'span': { fontSize: theme('fontSize.span')[0], lineHeight: theme('fontSize.span')[1].lineHeight },
      });
    },
  ],
};
