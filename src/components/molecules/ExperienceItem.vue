<template>
  <Card class="p-6 mb-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="flex-shrink-0 w-full md:w-48">
        <div class="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
          {{ duration }}
        </div>
      </div>
      
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2">
          <BaseHeading :level="4" class="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {{ title }}
          </BaseHeading>
        </div>
        
        <BaseText class="mb-4 text-muted-foreground font-medium">
          {{ company }}
        </BaseText>
        
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li 
            v-for="(responsibility, index) in responsibilities" 
            :key="index"
            class="transition-all duration-300 group-hover:translate-x-1"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import Card from '@/components/ui/Card.vue'

interface ExperienceItemProps {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

defineProps<ExperienceItemProps>()
</script>