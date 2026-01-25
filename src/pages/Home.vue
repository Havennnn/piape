<template>
  <DefaultLayout>
    <HeroSection />
    <EducationSection />
    <ExperienceSection />
    <ProjectsSection />
  </DefaultLayout>
</template>

<script setup lang="ts">
import EducationSection from '@/components/organisms/EducationSection.vue'
import ExperienceSection from '@/components/organisms/ExperienceSection.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import ProjectsSection from '@/components/organisms/ProjectsSection.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>