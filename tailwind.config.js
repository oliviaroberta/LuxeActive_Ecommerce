/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* warm-gray */
        input: 'var(--color-input)', /* warm-white */
        ring: 'var(--color-ring)', /* sage */
        background: 'var(--color-background)', /* warm-white */
        foreground: 'var(--color-foreground)', /* charcoal */
        primary: {
          DEFAULT: 'var(--color-primary)', /* warm-beige */
          foreground: 'var(--color-primary-foreground)', /* charcoal */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* warm-white */
          foreground: 'var(--color-secondary-foreground)', /* charcoal */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* gentle-coral */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* warm-beige */
          foreground: 'var(--color-muted-foreground)', /* warm-gray */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* sage */
          foreground: 'var(--color-accent-foreground)', /* charcoal */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* warm-white */
          foreground: 'var(--color-popover-foreground)', /* charcoal */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* muted-rose */
          foreground: 'var(--color-card-foreground)', /* charcoal */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* natural-green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* warm-amber */
          foreground: 'var(--color-warning-foreground)', /* charcoal */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* gentle-coral */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        premium: '0 4px 20px rgba(44, 44, 44, 0.08)',
        'premium-hover': '0 8px 25px rgba(44, 44, 44, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      gridTemplateColumns: {
        'asymmetric': '1fr 2fr 1fr',
        'product': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      aspectRatio: {
        'product': '3/4',
        'hero': '16/9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}