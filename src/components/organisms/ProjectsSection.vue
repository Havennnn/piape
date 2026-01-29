<template>
  <section id="projects" class="py-20 bg-background relative overflow-hidden">
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center mb-16">
        <BaseBadge variant="default" class="mb-4 px-4 py-1.5 text-sm text-white/20 text-primary-foreground border border-primary/30">
          Featured Work
        </BaseBadge>
        <BaseHeading :level="2" class="text-3xl md:text-4xl font-bold text-foreground font-light tracking-wide">
          Projects
        </BaseHeading>
        <BaseText class="mt-4 max-w-2xl mx-auto text-gray-100 font-light">
          A selection of my recent work showcasing my skills and experience
        </BaseText>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="animate-in fade-in zoom-in duration-500"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ProjectCard from '@/components/molecules/ProjectCard.vue'

interface Project {
  title: string
  description: string
  tech: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Vue 3 and Tailwind CSS. Features smooth animations, dark mode support, and a clean design.',
    tech: 'Vue 3',
    tags: ['Vue 3', 'Tailwind CSS', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing e-commerce operations. Includes analytics, inventory management, and order processing.',
    tech: 'React',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tech: 'Vue',
    tags: ['Vue 3', 'Firebase', 'Tailwind CSS', 'PWA'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather application that provides accurate forecasts using open weather APIs.',
    tech: 'JavaScript',
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and SEO optimization.',
    tech: 'Next.js',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'A social media management dashboard that helps users schedule posts and track performance.',
    tech: 'Vue',
    tags: ['Vue 3', 'GraphQL', 'Tailwind CSS', 'Apollo'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
] as Project[]
</script>