/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#111827',
        card: '#ffffff',
        'card-foreground': '#111827',
        popover: '#ffffff',
        'popover-foreground': '#111827',
        primary: '#111827',
        'primary-foreground': '#ffffff',
        secondary: '#f3f4f6',
        'secondary-foreground': '#111827',
        muted: '#f3f4f6',
        'muted-foreground': '#6b7280',
        accent: '#f3f4f6',
        'accent-foreground': '#111827',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#111827',
      },
      borderRadius: {
        'lg': '0.5rem',
        'md': 'calc(0.5rem - 2px)',
        'sm': 'calc(0.5rem - 4px)',
      },
    },
  },
  plugins: [],
}