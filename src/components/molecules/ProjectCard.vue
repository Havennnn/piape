<template>
  <Card class="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border border-border hover:border-primary/30 group">
    <div class="mb-4 group-hover:scale-105 transition-transform duration-300">
      <BaseHeading :level="3" class="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {{ title }}
      </BaseHeading>
    </div>
    
    <BaseText class="mb-6 text-muted-foreground leading-relaxed">
      {{ description }}
    </BaseText>
    
    <div class="flex flex-wrap gap-2 mb-6">
      <BaseBadge 
        v-for="tech in techStack" 
        :key="tech" 
        variant="secondary" 
        class="px-2 py-1 text-xs transition-all duration-300 group-hover:scale-105"
      >
        {{ tech }}
      </BaseBadge>
    </div>
    
    <div class="flex gap-4 pt-4 border-t border-border">
      <a
        v-if="githubUrl"
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group-hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
        GitHub
      </a>
      
      <a
        v-if="demoUrl"
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group-hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" x2="21" y1="14" y2="3"></line>
        </svg>
        Live Demo
      </a>
    </div>
  </Card>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import Card from '@/components/ui/Card.vue'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
}

defineProps<ProjectCardProps>()
</script>