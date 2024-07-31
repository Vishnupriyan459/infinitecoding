/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'java': "url('/public/Course/java.svg')",
        'ai': "url('/public/Course/ai.svg')",
        'Automation': "url('/public/Course/Automation.svg')",
        'FullStack': "url('/public/Course/FullStack.svg')"
       
      },
    },
  },
  plugins: [],
}


