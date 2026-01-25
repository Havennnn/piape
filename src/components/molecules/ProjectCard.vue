<template>
  <Card class="flex flex-col bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
    <div class="p-6 flex flex-col h-full">
      <div class="mb-4">
        <BaseBadge variant="default" class="mb-2 px-2 py-0.5 text-xs">
          {{ project.tech }}
        </BaseBadge>
        <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {{ project.title }}
        </h3>
      </div>
      
      <p class="text-muted-foreground mb-6 flex-grow">
        {{ project.description }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
        >
          {{ tag }}
        </span>
      </div>
      
      <div class="flex items-center gap-3 mt-auto pt-4 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300">
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </a>
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import Card from '@/components/ui/Card.vue'

interface Project {
  title: string
  description: string
  tech: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

interface Props {
  project: Project
}

defineProps<Props>()
</script>