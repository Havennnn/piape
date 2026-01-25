<template>
  <section id="education" class="py-20 bg-background">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-16">
        <BaseBadge variant="outline" class="mb-4 px-3 py-1 text-sm">
          Education
        </BaseBadge>
        <BaseHeading :level="2" class="text-3xl md:text-4xl font-bold text-foreground">
          Academic Background
        </BaseHeading>
      </div>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <Card 
          v-for="(education, index) in educationData" 
          :key="index"
          class="p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
        >
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-shrink-0 w-full md:w-48">
              <div class="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {{ education.dates }}
              </div>
            </div>
            
            <div class="flex-1">
              <BaseHeading :level="3" class="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {{ education.school }}
              </BaseHeading>
              
              <BaseText class="mb-4 text-muted-foreground font-medium">
                {{ education.degree }}
              </BaseText>
              
              <BaseText class="text-muted-foreground leading-relaxed">
                {{ education.description }}
              </BaseText>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import Card from '@/components/ui/Card.vue'

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