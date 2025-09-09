/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './providers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
  // Ensure all CSS is generated for SSR
  safelist: [
    'bg-gray-100',
    'text-slate-800',
    'text-orange-400',
    'hover:text-amber-700',
    'bg-white',
    'shadow-lg',
    'rounded-xl',
    'hover:shadow-xl',
    'max-w-screen-xl',
    'mx-auto',
    'px-4',
    'bg-orange-400',
    'text-white',
    'font-semibold',
    'py-2',
    'hover:bg-amber-700',
    'transition',
    'transition-colors',
    'transition-shadow',
    'antialiased',
    'font-sans',
  ],
}
