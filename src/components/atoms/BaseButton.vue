<template>
  <Button v-bind="$attrs">
    <slot />
  </Button>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>