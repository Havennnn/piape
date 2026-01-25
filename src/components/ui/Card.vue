<template>
  <div :class="cn(cardVariants(), $attrs.class as string)" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const cardVariants = cva("rounded-lg border bg-card text-card-foreground shadow-sm")
</script>