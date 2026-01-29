/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f5f5f5',
        card: '#1a1a1a',
        'card-foreground': '#f5f5f5',
        popover: '#1a1a1a',
        'popover-foreground': '#f5f5f5',
        primary: '#8B5CF6',
        'primary-foreground': '#ffffff',
        'primary-dark': '#7C3AED',
        'primary-light': '#A78BFA',
        secondary: '#C4B5FD',
        'secondary-foreground': '#1a1a1a',
        muted: '#1a1a1a',
        'muted-foreground': '#A78BFA',
        accent: '#E9D5FF',
        'accent-foreground': '#1a1a1a',
        destructive: '#EF4444',
        'destructive-foreground': '#ffffff',
        border: '#2d2d2d',
        input: '#2d2d2d',
        ring: '#8B5CF6',
        'purple-deep': '#6D28D9',
        'purple-soft': '#DDD6FE',
        'lavender': '#E9D5FF',
      },
      borderRadius: {
        'lg': '0.5rem',
        'md': 'calc(0.5rem - 2px)',
        'sm': 'calc(0.5rem - 4px)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        'gradient-soft': 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      },
    },
  },
  plugins: [],
}