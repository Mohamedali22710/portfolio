import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0D12',
        surface: {
          DEFAULT: '#12161D',
          elevated: '#1A1F28',
          dim: '#10131a',
          bright: '#363941',
          container: '#1c2027',
          'container-lowest': '#0b0e15',
          'container-low': '#181c22',
          'container-high': '#272a31',
          'container-highest': '#32353c',
        },
        border: {
          DEFAULT: '#232A35',
          strong: '#2E3644',
        },
        text: {
          primary: '#EDEFF2',
          secondary: '#9AA3B2',
          muted: '#5C6675',
        },
        accent: {
          DEFAULT: '#3E8EFF',
          hover: '#63A6FF',
          soft: 'rgba(62, 142, 255, 0.08)',
        },
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
        primary: {
          DEFAULT: '#aac7ff',
          container: '#428fff',
        },
        secondary: {
          DEFAULT: '#c3c6d0',
          container: '#454951',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        btn: '8px',
        DEFAULT: '8px',
        card: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      spacing: {
        'gutter-desktop': '24px',
        'margin-desktop': '24px',
        'section-gap-desktop': '128px',
        'section-gap-mobile': '72px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
        md: '0 8px 24px rgba(0, 0, 0, 0.35)',
        accent: '0 0 0 1px #3E8EFF, 0 8px 24px rgba(62, 142, 255, 0.15)',
        'accent-subtle': '0 4px 20px rgba(62, 142, 255, 0.1)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        blinkCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink-cursor': 'blinkCursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

