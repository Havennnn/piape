<template>
  <Badge :variant="variant" class="px-2 py-0.5 text-xs font-medium transition-all duration-200 hover:scale-105">
    <slot />
  </Badge>
</template>

<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'info' | 'glass'

interface Props {
  variant?: BadgeVariant
}

defineProps<Props>()
</script>