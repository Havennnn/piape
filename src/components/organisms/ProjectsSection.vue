<template>
  <section id="projects" class="py-20 bg-background">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-16">
        <BaseBadge variant="outline" class="mb-4 px-3 py-1 text-sm">
          Projects
        </BaseBadge>
        <BaseHeading :level="2" class="text-3xl md:text-4xl font-bold text-foreground">
          Featured Work
        </BaseHeading>
        <BaseText class="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Here are some of my recent projects that showcase my skills and expertise
        </BaseText>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in projectsData"
          :key="index"
          :title="project.title"
          :description="project.description"
          :techStack="project.techStack"
          :githubUrl="project.githubUrl"
          :demoUrl="project.demoUrl"
          class="animate-fade-in"
          :style="{ animationDelay: `${index * 100}ms` }"
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
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
}

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A fully functional online shopping platform with product catalog, shopping cart, and payment integration.",
    techStack: ["Vue 3", "TypeScript", "Pinia", "Stripe API"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    techStack: ["Vue 3", "Firebase", "Tailwind CSS", "Socket.io"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Vue 3 and Tailwind CSS, featuring a clean and responsive design.",
    techStack: ["Vue 3", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  }
] as Project[]
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}
</style>