<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
      <a
        href="#home"
        class="flex items-center gap-2 font-bold text-xl text-primary"
        @click="handleClick"
      >
        <span>Portfolio</span>
      </a>
      
      <nav class="hidden md:flex items-center gap-6">
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#education">Education</NavItem>
        <NavItem href="#experience">Experience</NavItem>
        <NavItem href="#projects">Projects</NavItem>
      </nav>
      
      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          @click="toggleMobileMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-if="!mobileMenuOpen"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-else
          >
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
    
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t bg-background"
    >
      <div class="container py-4 px-4 md:px-6 space-y-3">
        <NavItem href="#home" @click="mobileMenuOpen = false">Home</NavItem>
        <NavItem href="#education" @click="mobileMenuOpen = false">Education</NavItem>
        <NavItem href="#experience" @click="mobileMenuOpen = false">Experience</NavItem>
        <NavItem href="#projects" @click="mobileMenuOpen = false">Projects</NavItem>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import NavItem from '@/components/molecules/NavItem.vue'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleClick = (event: MouseEvent) => {
  event.preventDefault()
  const targetElement = document.getElementById('home')
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>