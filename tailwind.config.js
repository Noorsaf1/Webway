/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        secondary: {
          50: '#fff0f0',
          100: '#ffe1e1',
          200: '#ffc3c3',
          300: '#ffa5a5',
          400: '#ff8787',
          500: '#ff6969',
          600: '#cc5454',
          700: '#993f3f',
          800: '#662a2a',
          900: '#331515',
        },
        dark: {
          50: '#f5f7ff',
          100: '#ebefff',
          200: '#d6dfff',
          300: '#b3c2ff',
          400: '#8fa4ff',
          500: '#6b87ff',
          600: '#476bcc',
          700: '#354f99',
          800: '#233466',
          900: '#121a33',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-down': 'fadeInDown 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-left': 'fadeInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-right': 'fadeInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'zoom-in': 'zoomIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-down': 'slideDown 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'scale': 'scale 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'rotate-in': 'rotateIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'blur-in': 'blurIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px) scale(0.95)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)'
          }
        },
        fadeInDown: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-40px) scale(0.95)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)'
          }
        },
        fadeInLeft: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-40px) scale(0.95)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0) scale(1)'
          }
        },
        fadeInRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(40px) scale(0.95)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0) scale(1)'
          }
        },
        zoomIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)'
          }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100px)', 
            opacity: '0',
            filter: 'blur(8px)'
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-100px)', 
            opacity: '0',
            filter: 'blur(8px)'
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(2deg)',
            filter: 'brightness(1.1)'
          }
        },
        scale: {
          '0%': { 
            transform: 'scale(0.9)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        rotateIn: {
          '0%': { 
            transform: 'rotate(-10deg) scale(0.95)',
            opacity: '0'
          },
          '100%': { 
            transform: 'rotate(0) scale(1)',
            opacity: '1'
          }
        },
        blurIn: {
          '0%': { 
            filter: 'blur(10px)',
            opacity: '0',
            transform: 'scale(1.1)'
          },
          '100%': { 
            filter: 'blur(0)',
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
    },
  },
  plugins: [],
};