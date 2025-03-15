import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F1C', // Orange/Yellow accent color
        secondary: '#2EC4B6', // Teal accent
        dark: '#011627', // Dark blue/black
        light: '#FDFFFC', // Off white
        gray: {
          100: '#F6F7F8',
          200: '#E8EBED',
          300: '#C9CED2',
          400: '#A7AEB4',
          500: '#848D96',
          600: '#626C77',
          700: '#414B57',
          800: '#2A3441',
          900: '#1A2634',
        }
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 