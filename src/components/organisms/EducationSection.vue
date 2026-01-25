<template>
  <section id="education" class="py-20 bg-background">
    <div class="container mx-auto px-4 md:px-6">
      <BaseHeading :level="2" class="mb-12 text-center">
        Education
      </BaseHeading>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <div
          v-for="(education, index) in educationData"
          :key="index"
          class="flex flex-col md:flex-row gap-8 p-6 bg-muted/50 rounded-lg"
        >
          <div class="flex-shrink-0 w-full md:w-48 text-sm font-medium text-muted-foreground">
            {{ education.dates }}
          </div>
          
          <div class="flex-1">
            <BaseHeading :level="3" class="mb-2">
              {{ education.school }}
            </BaseHeading>
            
            <BaseText class="mb-4 text-muted-foreground">
              {{ education.degree }}
            </BaseText>
            
            <BaseText class="text-muted-foreground">
              {{ education.description }}
            </BaseText>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

interface Education {
  school: string
  degree: string
  dates: string
  description: string
}

const educationData = [
  {
    school: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    dates: "2019 - 2023",
    description: "Specialized in Web Development and Human-Computer Interaction. Graduated with Honors."
  },
  {
    school: "Online Learning Platform",
    degree: "Full Stack Web Development Certification",
    dates: "2022 - 2023",
    description: "Comprehensive training in modern web technologies including React, Node.js, and database design."
  }
] as Education[]
</script>