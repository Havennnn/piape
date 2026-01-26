<template>
  <Card class="bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-x-1 group">
    <div class="p-6 flex flex-col md:flex-row gap-6">
      <div class="md:w-1/3">
        <div class="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
          {{ experience.company }}
        </div>
        <div class="text-sm text-muted-foreground">
          {{ formatDateRange(experience.startDate, experience.endDate) }}
        </div>
      </div>
      
      <div class="md:w-2/3 flex flex-col">
        <div class="mb-2">
          <div class="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {{ experience.role }}
          </div>
          <div class="text-sm text-muted-foreground">
            {{ experience.location }}
          </div>
        </div>
        
        <p class="text-muted-foreground mb-4">
          {{ experience.description }}
        </p>
        
        <div v-if="experience.responsibilities && experience.responsibilities.length > 0" class="mb-4">
          <h4 class="text-sm font-semibold text-foreground mb-2">Responsibilities:</h4>
          <ul class="space-y-1">
            <li v-for="(responsibility, index) in experience.responsibilities" :key="index" class="text-sm text-muted-foreground flex items-start gap-2">
              <span class="text-primary mt-1">•</span>
              <span>{{ responsibility }}</span>
            </li>
          </ul>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in experience.skills"
            :key="skill"
            class="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'

interface Experience {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  skills: string[]
}

interface Props {
  experience: Experience
}

defineProps<Props>()

const formatDateRange = (startDate: string, endDate: string) => {
  if (!endDate) {
    return `${startDate} - Present`
  }
  return `${startDate} - ${endDate}`
}
</script>