// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // لوحة الألوان الجديدة لـ "مؤمن أحمد"
        'portfolio': {
          white: '#ffffff',
          light: '#f8fafc', // خلفية فاتحة جداً للتميز
          cyan: '#22d3ee',  // اللون اللبني الأساسي (Cyan 400)
          text: '#0f172a',  // لون نص غامق وواضح
          subtext: '#475569', // لون نص ثانوي
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // استخدام خط Next.js الافتراضي
      },
    },
  },
  plugins: [],
}