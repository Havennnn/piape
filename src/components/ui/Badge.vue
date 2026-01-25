<template>
  <span
    :class="[
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      variantClasses[variant || 'default'],
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'info' | 'glass'

interface Props {
  variant?: BadgeVariant
}

const { variant = 'default' } = defineProps<Props>()

const variantClasses = {
  default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'text-foreground',
  destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  success: 'border-transparent bg-green-500 text-white hover:bg-green-600',
  warning: 'border-transparent bg-yellow-500 text-white hover:bg-yellow-600',
  info: 'border-transparent bg-blue-500 text-white hover:bg-blue-600',
  glass: 'border-gray-300 bg-white/50 text-gray-700 backdrop-blur-sm hover:bg-white/70',
}
</script>