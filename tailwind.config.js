// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'animate-fly1',
    'animate-fly2',
    'animate-fly3',
  ],
  theme: {
    extend: {
      keyframes: {
        fly1: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        fly2: {
          '0%': { transform: 'translate(0, 0) rotate(-5deg)' },
          '100%': { transform: 'translate(100vw, -10vh) rotate(10deg)' },
        },
        fly3: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(100vw, -5vh) scale(1.2)' },
        },
        sail: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
      },
      animation: {
        fly1: 'fly1 10s linear infinite',
        fly2: 'fly2 12s ease-in-out infinite',
        fly3: 'fly3 14s ease-in-out infinite',
        sail: 'sail 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
