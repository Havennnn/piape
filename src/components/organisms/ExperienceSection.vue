<template>
  <section id="experience" class="py-20 bg-muted/30">
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
  skills: string[]
}

const experiences = [
  {
    company: 'Tech Corporation',
    role: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    startDate: '2020',
    endDate: 'Present',
    description: 'Lead frontend development for the company\'s flagship product, improving user experience and increasing conversion rates by 25%.',
    skills: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Webpack']
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Developer',
    location: 'New York, NY',
    startDate: '2018',
    endDate: '2020',
    description: 'Developed responsive websites and web applications for various clients using modern frontend technologies.',
    skills: ['React', 'JavaScript', 'CSS3', 'Sass']
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