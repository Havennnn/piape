<template>
  <Separator v-bind="$attrs">
    <slot />
  </Separator>
</template>

<script setup lang="ts">
import Separator from '@/components/ui/Separator.vue';
</script>