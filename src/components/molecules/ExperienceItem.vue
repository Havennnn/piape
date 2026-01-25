<template>
  <div class="flex gap-6 pb-8 border-b last:border-0">
    <div class="flex-shrink-0 w-48 text-sm font-medium text-muted-foreground">
      {{ duration }}
    </div>
    
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-2">
        <BaseHeading :level="4" class="text-lg">
          {{ title }}
        </BaseHeading>
      </div>
      
      <BaseText class="mb-4 text-muted-foreground">{{ company }}</BaseText>
      
      <ul class="list-disc list-inside space-y-2 text-muted-foreground">
        <li v-for="(responsibility, index) in responsibilities" :key="index">
          {{ responsibility }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

interface ExperienceItemProps {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

defineProps<ExperienceItemProps>()
</script>