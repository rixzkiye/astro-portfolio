/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Tipografi yang bersih dan elegan
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      // Palet warna baru yang lebih kohesif dan estetik
      colors: {
        
        // Tema Terang (Light Mode)
        light: {
          bg: '#f8f9fa',          // Latar belakang: Putih gading yang lembut
          surface: '#ffffff',     // Permukaan (Card): Putih bersih
          primary: '#2563eb',     // Warna utama: Biru yang kuat dan modern
          'primary-hover': '#1d4ed8', // Hover untuk warna utama
          secondary: '#475569',   // Warna sekunder: Abu-abu netral
          accent: '#db2777',      // Aksen: Pink untuk sentuhan personal
          text: '#1f2937',        // Teks utama: Abu-abu gelap pekat
          muted: '#6b7280',       // Teks sekunder: Abu-abu lebih terang (FIXED)
          border: '#e5e7eb',      // Garis batas: Abu-abu sangat terang
        },
        // Tema Gelap (Dark Mode)
        dark: {
          bg: '#0b1120',          // Latar belakang: Biru malam yang dalam
          surface: '#171f2e',     // Permukaan (Card): Sedikit lebih terang dari bg
          primary: '#3b82f6',     // Warna utama: Biru cerah yang menonjol
          'primary-hover': '#60a5fa', // Hover untuk warna utama
          secondary: '#94a3b8',   // Warna sekunder: Abu-abu terang
          accent: '#f472b6',      // Aksen: Pink cerah untuk kontras
          text: '#f3f4f6',        // Teks utama: Putih gading
          muted: '#9ca3af',       // Teks sekunder: Abu-abu lebih redup (FIXED)
          border: '#374155',      // Garis batas: Abu-abu gelap
        }
      },
      // Animasi yang halus untuk interaksi modern
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
