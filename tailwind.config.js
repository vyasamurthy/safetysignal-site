/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        blue: {
          900: '#0A1628',
          800: '#0D1F3C',
          700: '#102B54',
          600: '#1A3A6B',
          500: '#1E4D8C',
          400: '#2563EB',
          300: '#3B82F6',
          200: '#93C5FD',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        emerald: { DEFAULT: '#10B981' },
        amber: { DEFAULT: '#F59E0B' },
      },
    },
  },
  plugins: [],
}
