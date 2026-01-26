<template>
  <section id="experience" class="py-20" style="background-color: #FFF7F3">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-16">
        <BaseBadge variant="default" class="mb-4 px-3 py-1 text-sm">
          Experience
        </BaseBadge>
        <BaseHeading :level="2" class="text-3xl md:text-4xl font-bold text-foreground">
          Professional Experience
        </BaseHeading>
        <BaseText class="mt-4 max-w-2xl mx-auto text-muted-foreground">
          My journey in the tech industry and the projects I've worked on
        </BaseText>
      </div>
      
      <div class="max-w-3xl mx-auto space-y-6">
        <ExperienceItem
          v-for="(experience, index) in experiences"
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="animate-in fade-in slide-in-from-bottom-4 duration-500"
          :experience="experience"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'

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

const experiences = [
  {
    company: 'Accenture',
    role: 'Packaged App Development Associate',
    location: 'Philippines, Manila',
    startDate: 'September 2025',
    endDate: 'February 2026',
    responsibilities: [
      "Acted as Bench Team Lead, coordinating daily activities, tracking deliverables, and serving as point-of-contact between trainees and leads",
      "Supported application testing activities, including test case execution, result validation, and defect reporting",
      "Performed basic SQL queries to validate data and support testing activities",
      "Gained exposure to enterprise systems (Workday), performed data transformation, validation, and error handling"
    ],
  },
  {
    company: "Accenture Academe",
    role: "Fullstack Developer Intern",
    location: "Philippines, Manila",
    startDate: "February 2025",
    endDate: "March 2025",
    responsibilities: [
      "Completed intensive training covering fullstack development such as Java, Springboot, Angular, Javascript",
      "Built understanding of REST APIs, backend workflows, and database interactions",
      "Used tools such as Git/GitHub, Maven, Eclipse, and VS Code for collaborative development",
      "Strengthened problem-solving, debugging, and technical documentation skills"
    ],
  }
] as Experience[]
</script>