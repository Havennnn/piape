<template>
  <section id="experience" class="py-20 bg-muted/30">
    <div class="container mx-auto px-4 md:px-6">
      <BaseHeading :level="2" class="mb-12 text-center">
        Experience
      </BaseHeading>
      
      <div class="max-w-4xl mx-auto">
        <ExperienceItem
          v-for="(experience, index) in experienceData"
          :key="index"
          :title="experience.title"
          :company="experience.company"
          :duration="experience.duration"
          :responsibilities="experience.responsibilities"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import ExperienceItem from '@/components/molecules/ExperienceItem.vue'

interface Experience {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    responsibilities: [
      "Develop and maintain responsive web applications using Vue 3 and TypeScript",
      "Collaborate with designers to implement pixel-perfect UI/UX",
      "Optimize applications for maximum speed and scalability",
      "Mentor junior developers and conduct code reviews"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Digital Agency",
    duration: "2021 - 2022",
    responsibilities: [
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Implemented interactive features and animations",
      "Fixed bugs and performed website maintenance",
      "Assisted in client communication and project management"
    ]
  }
] as Experience[]
</script>