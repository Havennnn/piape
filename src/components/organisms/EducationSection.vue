<template>
  <section id="education" class="py-20" style="background-color: #FAD0C4">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-16">
        <BaseBadge variant="default" class="mb-4 px-3 py-1 text-sm">
          Education
        </BaseBadge>
        <BaseHeading :level="2" class="text-3xl md:text-4xl font-bold text-foreground">
          Education & Certification
        </BaseHeading>
        <BaseText class="mt-4 max-w-2xl mx-auto text-muted-foreground">
          My academic background and professional certifications
        </BaseText>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(education, index) in educationList"
          :key="index"
          class="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <path d="M12 8L2 12v1h20v-1l-10-4z"></path>
                <line x1="12" y1="13" x2="12" y2="19"></line>
                <circle cx="12" cy="21" r="1"></circle>
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                {{ education.institution }}
              </div>
              <div class="text-sm text-muted-foreground mb-2">
                {{ formatDateRange(education.startDate, education.endDate) }}
              </div>
              <div class="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                {{ education.degree }}
              </div>
              <div class="text-sm text-muted-foreground mb-3">
                {{ education.field }}
              </div>
              <p class="text-muted-foreground text-sm">
                {{ education.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 max-w-3xl mx-auto">
        <div class="text-center mb-8">
          <BaseBadge variant="default" class="mb-4 px-3 py-1 text-sm">
            Certifications
          </BaseBadge>
          <BaseHeading :level="3" class="text-2xl font-bold text-foreground">
            Professional Certifications
          </BaseHeading>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="bg-card p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:translate-x-1 group text-center"
            :style="{ animationDelay: `${(educationList.length + index) * 0.1}s` }"
          >
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 mx-auto mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <path d="M12 2l2.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.91-1.01L12 2z"></path>
              </svg>
            </div>
            <div class="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
              {{ cert.name }}
            </div>
            <div class="text-xs text-muted-foreground mt-1">
              {{ cert.issuer }}
            </div>
            <div class="text-xs text-muted-foreground mt-1">
              {{ cert.year }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

interface Education {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description: string
}

interface Certification {
  name: string
  issuer: string
  year: string
}

const educationList = [
  {
    institution: 'STI College - Ortigas Cainta',
    degree: 'Bachelor of Science in Computer Science',
    field: 'Computer Science',
    startDate: '2021',
    endDate: '2025',
    description: 'Specialized in software engineering, database management, and computer networking. Graduated with Cum Laude.'
  },
  {
    institution: 'Montessori Professional College of Asia - Antipolo City',
    degree: 'Information and Communications Technology',
    field: 'ICT',
    startDate: '2018',
    endDate: '2020',
    description: 'Developed basic applications using Visual Basic, focusing on fundamental programming. Graduated with Honors.'
  }
] as Education[]

const certifications = [
  {
    name: 'Full Stack Web Development',
    issuer: 'Udemy (Accenture Academe)',
    year: '2025'
  },
  {
    name: 'Java Masterclass',
    issuer: 'Udemy (Accenture Academe)',
    year: '2025'
  },
  {
    name: 'Angular',
    issuer: 'Udemy (Accenture Academe)',
    year: '2025'
  },
  {
    name: 'Springboot & Hibernate',
    issuer: 'Udemy (Accenture Academe)',
    year: '2025'
  },
  {
    name: 'Java Unit Testing (JUnit & Mockito)',
    issuer: 'Udemy (Accenture Academe)',
    year: '2025'
  },
   {
    name: 'Git',
    issuer: 'Udemy (Accenture Academe)',
    year: '2025'
  }
] as Certification[]

const formatDateRange = (startDate: string, endDate: string) => {
  if (!endDate) {
    return `${startDate} - Present`
  }
  return `${startDate} - ${endDate}`
}
</script>