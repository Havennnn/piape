<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <TechStackSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import EducationSection from '@/components/organisms/EducationSection.vue'
import ExperienceSection from '@/components/organisms/ExperienceSection.vue'
import Footer from '@/components/organisms/Footer.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import Navbar from '@/components/organisms/Navbar.vue'
import ProjectsSection from '@/components/organisms/ProjectsSection.vue'
import TechStackSection from '@/components/organisms/TechStackSection.vue'
</script>