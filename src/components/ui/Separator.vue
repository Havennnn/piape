<template>
  <div :class="cn(separatorVariants({ orientation, decorative }), $attrs.class as string)" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const separatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
    decorative: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    decorative: true,
  },
})

defineProps<{
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}>()
</script>