<script setup lang="ts">
import MenuItem from "./MenuItem.vue"

defineProps<{
  section: {
    category: string
    items: Array<{
      name: string
      price: number
      description?: string
      tags?: string[]
    }>
  }
}>()
</script>

<template>
  <section class="py-10">

    <div class="container mx-auto px-6 max-w-3xl">

      <!-- Category Title -->
      <h2 class="text-xl font-medium tracking-wide mb-6">
        {{ section.category }}
      </h2>

      <!-- Items -->
      <div class="space-y-1">
        <MenuItem v-reveal="50"
          v-for="item in section.items"
          :key="item.name"
          :item="item"
        />
      </div>

    </div>

  </section>
</template>