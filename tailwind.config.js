module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  important: '#tailwind',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default:
          '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        md:
          '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg:
          '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl:
          '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.2rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      minWidth: {
        10: '2.5rem',
        48: '12rem',
      },
      opacity: {
        90: '0.9',
      },
      scale: {
        98: '.98',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      customForms: (theme) => ({
        default: {
          'input, textarea, multiselect, select, checkbox, radio': {
            backgroundColor: theme('colors.white'),
            borderColor: theme('colors.gray.300'),
            borderRadius: theme('borderRadius.default'),
            '&:focus': {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme('colors.gray.500'),
            },
          },
          'input, textarea, multiselect, select': {
            backgroundColor: theme('colors.white'),
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme('spacing.3'),
            paddingRight: theme('spacing.4'),
            paddingBottom: theme('spacing.3'),
            paddingLeft: theme('spacing.4'),
          },
          'input, textarea': {
            '&::placeholder': {
              color: theme('colors.gray.500'),
            },
          },
          select: {
            paddingRight: theme('spacing.10'),
            iconColor: theme('colors.gray.400'),
          },
          'checkbox, radio': {
            color: theme('colors.gray.800'),
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.sm'),
          },
        },
      }),
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
