/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        tertiary: '#F59E0B',
        grey: '#6B7280',
        blue: '#2563EB',
        light: '#F3F4F6',
        dark: '#111827',
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }],
        h2: ['2rem', { lineHeight: '2.25rem' }],
        h3: ['1.75rem', { lineHeight: '2rem' }],
        h4: ['1.5rem', { lineHeight: '1.75rem' }],
        h5: ['1.25rem', { lineHeight: '1.5rem' }],
        h6: ['1rem', { lineHeight: '1.25rem' }],
        p: ['1rem', { lineHeight: '1.5rem' }],
        a: ['1rem', { lineHeight: '1.5rem' }],
        span: ['1rem', { lineHeight: '1.5rem' }],
        btn: ['1rem', { lineHeight: '1.5rem' }], // Font size for buttons
      },
      spacing: {
        btn: '12px 24px', // Padding for buttons
      },
      textDecoration: {
        btn: 'none', // No underline by default for buttons
      },
      borderRadius: {
        btn: '0.375rem', // Border radius for buttons
      },
      borderWidth: {
        btn: '2px', // Border width for buttons
      },
      backgroundColor: {
        btnPrimary: '#1D4ED8', // Primary background color for buttons
        btnSecondary: '#9333EA', // Secondary background color for buttons
      },
      borderColor: {
        btnPrimary: '#1D4ED8', // Primary border color
        btnSecondary: '#9333EA', // Secondary border color
      },
      hover: {
        btnPrimary: {
          backgroundColor: '#2563EB', // Darker shade of blue on hover for primary button
          textColor: '#FFFFFF', // White text color on hover
        },
        btnSecondary: {
          backgroundColor: '#9333EA', // Darker shade on hover for secondary button
          textColor: '#FFFFFF', // White text color on hover
        },
      },
    },
  },
  plugins: [],
}
