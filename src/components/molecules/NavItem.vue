<template>
  <a
    :href="href"
    class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface NavItemProps {
  href: string
}

const props = defineProps<NavItemProps>()

const handleClick = (event: MouseEvent) => {
  event.preventDefault()
  const targetId = props.href.substring(1)
  const targetElement = document.getElementById(targetId)
  
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>