<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
      <a
        href="#home"
        class="flex items-center gap-2 font-bold text-xl text-primary group"
        @click="handleClick"
      >
        <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
          <span class="text-sm">P</span>
        </div>
        <span class="text-2xl tracking-tight">Portfolio</span>
      </a>
      
      <nav class="hidden md:flex items-center gap-6">
        <NavItem href="#home" class="group flex items-center gap-1">
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
            class="transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
          <span class="block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
        </NavItem>
        <NavItem href="#education" class="group flex items-center gap-1">
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
            class="transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          Education
          <span class="block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
        </NavItem>
        <NavItem href="#experience" class="group flex items-center gap-1">
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
            class="transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          Experience
          <span class="block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
        </NavItem>
        <NavItem href="#projects" class="group flex items-center gap-1">
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
            class="transition-transform duration-300 group-hover:scale-110"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          Projects
          <span class="block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
        </NavItem>
      </nav>
      
      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted"
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
      :class="mobileMenuOpen ? 'animate-slide-down' : 'animate-slide-up'"
    >
      <div class="container py-4 px-4 md:px-6 space-y-3">
        <NavItem href="#home" @click="mobileMenuOpen = false" class="block py-2 text-lg flex items-center gap-2">
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
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
        </NavItem>
        <NavItem href="#education" @click="mobileMenuOpen = false" class="block py-2 text-lg flex items-center gap-2">
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
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          Education
        </NavItem>
        <NavItem href="#experience" @click="mobileMenuOpen = false" class="block py-2 text-lg flex items-center gap-2">
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
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          Experience
        </NavItem>
        <NavItem href="#projects" @click="mobileMenuOpen = false" class="block py-2 text-lg flex items-center gap-2">
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
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          Projects
        </NavItem>
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

<style scoped>
@keyframes slide-down {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: auto;
  }
}

@keyframes slide-up {
  from {
    opacity: 1;
    height: auto;
  }
  to {
    opacity: 0;
    height: 0;
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out forwards;
  overflow: hidden;
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out forwards;
  overflow: hidden;
}
</style>