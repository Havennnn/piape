<template>
  <h1 :class="cn(baseVariants({ level }), $attrs.class as string)" v-bind="$attrs">
    <slot />
  </h1>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const baseVariants = cva("font-bold text-foreground", {
  variants: {
    level: {
      1: "text-4xl md:text-5xl lg:text-6xl",
      2: "text-3xl md:text-4xl",
      3: "text-2xl md:text-3xl",
      4: "text-xl md:text-2xl",
      5: "text-lg md:text-xl",
      6: "text-base md:text-lg",
    },
  },
  defaultVariants: {
    level: 1,
  },
})

defineProps<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
  tag?: string
}>()
</script>