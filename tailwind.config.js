/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6EE7B7',
        secondary: '#22D3EE',
        accent: '#F59E0B',
        dark: '#0B1021'
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
}
