/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html,js}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#3490dc',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                secondary: {
                    200: '#fef08a',
                    400: '#ffed4a',
                    600: '#ca8a04',
                },
                dark: {
                    50: '#f8fafc',
                    800: '#2d3748',
                    900: '#1a202c',
                },
                accent: '#f472b6',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Merriweather', 'Georgia', 'serif'],
                display: ['Poppins', 'sans-serif'],
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'glow': '0 0 15px rgba(52, 144, 220, 0.5)',
                'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'hover': '0 0 25px rgba(52, 144, 220, 0.3)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '2rem',
                '3xl': '3rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in',
                'slide-up': 'slideUp 0.8s ease-out',
                'slide-in-right': 'slideRight 0.8s ease-out',
                'bounce-soft': 'bounceSoft 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                bounceSoft: {
                    '0%, 100%': { transform: 'translateY(-2%)' },
                    '50%': { transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '.85' },
                },
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
}