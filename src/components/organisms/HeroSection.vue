<template>
  <section id="home" class="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center">
        <BaseHeading :level="1" class="mb-4">
          Hi, I'm <span class="text-primary">Your Name</span>
        </BaseHeading>
        
        <BaseHeading :level="2" class="mb-6 text-muted-foreground font-medium">
          Frontend Developer & UI Designer
        </BaseHeading>
        
        <BaseText class="mb-8 max-w-2xl text-lg text-muted-foreground">
          I create beautiful, responsive, and accessible web applications using
          modern frontend technologies. Passionate about clean code and intuitive design.
        </BaseText>
        
        <div class="flex gap-4">
          <BaseButton
            size="lg"
            @click="handleContactClick"
            class="px-8"
          >
            Contact Me
          </BaseButton>
          <BaseButton
            size="lg"
            variant="outline"
            @click="handleProjectsClick"
            class="px-8"
          >
            View Projects
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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