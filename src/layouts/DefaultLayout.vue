<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/organisms/Footer.vue';
import Navbar from '@/components/organisms/Navbar.vue';
</script>