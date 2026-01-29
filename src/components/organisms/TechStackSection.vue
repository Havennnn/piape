<template>
  <section id="tech-stack" class="py-20 bg-muted relative overflow-hidden">
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center mb-16">
        <BaseBadge variant="default" class="mb-4 px-4 py-1.5 text-sm text-white border border-primary/30">
          Skills
        </BaseBadge>
        <BaseHeading :level="2" class="text-3xl md:text-4xl font-bold text-foreground tracking-wide">
          Tech Stack & Expertise
        </BaseHeading>
        <BaseText class="mt-4 max-w-2xl mx-auto text-gray-100 font-light">
          Here are the technologies and tools I work with to build exceptional web applications.
        </BaseText>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group text-center"
        >
          <div class="mb-4 flex justify-center">
            <div class="w-12 h-12 rounded-lg text-white/10 flex items-center justify-center text-primary group-hover:text-white/20 group-hover:scale-110 transition-all duration-300">
              <template v-if="tech.icon === 'vue'">
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
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'tailwind'">
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
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'typescript'">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'node'">
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
                  <path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"></path>
                  <polyline points="16 18 12 14 8 18"></polyline>
                  <path d="M12 14V6"></path>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'git'">
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
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M6 21V9a9 9 0 0 1 9-9h9"></path>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'figma'">
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
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                  <path d="M12 2h3.5a3.5 3.5 0 0 1 3.5 3.5V12h-7V2z"></path>
                  <path d="M8.5 12H12v8H8.5a3.5 3.5 0 0 1-3.5-3.5V12z"></path>
                  <path d="M12 12h7v3.5a3.5 3.5 0 0 1-3.5 3.5H12v-7z"></path>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'java'">
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
                  <path d="M6 10c0 2 1 3 2 4-2 1-4 2-4 5 0 3 2 5 5 5s5-2 5-5c0-3-2-4-4-5 1-1 2-2 2-4 0-2-1-4-3-4-2 0-3 2-3 4z"></path>
                  <path d="M14 10c0 2 1 3 2 4-2 1-4 2-4 5 0 3 2 5 5 5s5-2 5-5c0-3-2-4-4-5 1-1 2-2 2-4 0-2-1-4-3-4-2 0-3 2-3 4z"></path>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'angular'">
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
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
                  <polyline points="12 12 16 8 12 4 8 8 12 12"></polyline>
                </svg>
              </template>
              <template v-else-if="tech.icon === 'springboot'">
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
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v10"></path>
                  <path d="M9 10h6"></path>
                  <path d="M9 14h6"></path>
                </svg>
              </template>
            </div>
          </div>
          <BaseHeading :level="3" class="text-lg font-bold text-foreground mb-2 font-light">
            {{ tech.name }}
          </BaseHeading>
          <BaseText class="text-sm text-gray-100 font-light">
            {{ tech.description }}
          </BaseText>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <BaseBadge variant="secondary" class="px-4 py-2 text-sm text-gray-900 border border-primary/20">
          Continuously learning and exploring new technologies
        </BaseBadge>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

interface Tech {
  name: string
  description: string
  icon: string
}

const techStack = [
  {
    name: 'Vue 3',
    description: 'Progressive JavaScript framework',
    icon: 'vue'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    icon: 'tailwind'
  },
  {
    name: 'Java',
    description: 'Object-oriented programming language',
    icon: 'java'
  },
  {
    name: 'Angular',
    description: 'TypeScript web framework',
    icon: 'angular'
  },
  {
    name: 'Springboot',
    description: 'Java framework for APIs',
    icon: 'springboot'
  },
  {
    name: 'Git',
    description: 'Version control system',
    icon: 'git'
  }
] as Tech[]
</script>