/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#78C2C4', // 默认值
          light: '#6cb2eb',
          dark: '#2779bd',
        },
        secondary: {
          DEFAULT: '#ca8a04', // 默认值
          light: '#fff382',
          dark: '#f2d024',
        },
        accent: {
          DEFAULT: '#38c172', // 默认值
          light: '#51d88a',
          dark: '#1f9d55',
        },
        neutral: {
          DEFAULT: '#f5f5f5', // 默认值
          light: '#ffffff',
          dark: '#e0e0e0',
        },
        current:{
          DEFAULT:'',
          lighr:'',
          dark:''
        }
      },
    },
  },
  plugins: [],
}