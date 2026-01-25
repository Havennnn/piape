<template>
  <section id="home" class="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div class="mb-6 animate-fade-in">
          <BaseBadge variant="secondary" class="px-3 py-1 text-sm">
            Available for hire
          </BaseBadge>
        </div>
        
        <BaseHeading :level="1" class="mb-4 text-4xl md:text-5xl lg:text-6xl animate-slide-up">
          Hi, I'm <span class="text-primary">Pia Pelaez</span>
        </BaseHeading>
        
        <BaseHeading :level="2" class="mb-6 text-muted-foreground font-medium text-xl md:text-2xl animate-slide-up animation-delay-200">
          Frontend Developer & Backend Developer
        </BaseHeading>
        
        <BaseText class="mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-slide-up animation-delay-400">
          I create beautiful, responsive, and accessible web applications using
          modern frontend technologies. Passionate about clean code and intuitive design.
        </BaseText>
        
        <div class="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
          <BaseButton
            size="lg"
            @click="handleContactClick"
            class="px-8 py-3 text-base font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            Contact Me
          </BaseButton>
          <BaseButton
            size="lg"
            variant="outline"
            @click="handleProjectsClick"
            class="px-8 py-3 text-base font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            View Projects
          </BaseButton>
        </div>
        
        <div class="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in animation-delay-800">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <span>Vue 3</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Tailwind CSS</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

const handleContactClick = () => {
  const targetElement = document.getElementById('contact')
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleProjectsClick = () => {
  const targetElement = document.getElementById('projects')
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
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
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}
</style>