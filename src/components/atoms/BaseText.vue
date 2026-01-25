<template>
  <p :class="cn(baseVariants({ size, weight }), $attrs.class as string)" v-bind="$attrs">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const baseVariants = cva("text-foreground", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
  },
})

defineProps<{
  size?: 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'bold'
}>()
</script>