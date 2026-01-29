<template>
  <div class="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-lg text-white/10 flex items-center justify-center text-primary group-hover:text-white/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
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
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div class="flex-1">
        <div class="text-sm font-semibold text-primary group-hover:text-primary-light transition-colors duration-300">
          {{ experience.company }}
        </div>
        <div class="text-sm text-gray-100 mb-2">
          {{ formatDateRange(experience.startDate, experience.endDate) }} • {{ experience.location }}
        </div>
        <div class="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 font-light">
          {{ experience.role }}
        </div>
        <ul class="space-y-2">
          <li
            v-for="(responsibility, index) in experience.responsibilities"
            :key="index"
            class="text-gray-100 text-sm font-light flex items-start gap-2"
          >
            <span class="text-primary mt-1">•</span>
            <span>{{ responsibility }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

interface Props {
  experience: Experience
}

defineProps<Props>()

const formatDateRange = (startDate: string, endDate: string) => {
  if (!endDate) {
    return `${startDate} - Present`
  }
  return `${startDate} - ${endDate}`
}
</script>