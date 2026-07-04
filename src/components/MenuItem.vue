<script setup lang="ts">
defineProps<{
  item: {
    name: string
    price: number
    description?: string
    tags?: string[]
  }
}>()
</script>

<template>
  <div class="py-4 border-b border-black/5 menu-item last:border-none">

    <!-- Top row: Name + Price -->
    <div v-reveal="25" class="flex items-baseline justify-between gap-6">

      <h3 v-reveal="30" class="text-base font-medium tracking-wide">
        {{ item.name }}
      </h3>

      <span v-reveal="40"class="text-sm text-muted whitespace-nowrap">
        £{{ item.price.toFixed(2) }}
      </span>

    </div>

        <!-- Tags -->
        <div v-if="item.tags?.length" class="mt-1 flex gap-2">

        <span
            v-for="tag in item.tags"
            :key="tag"
            class="text-[10px] uppercase tracking-wider text-muted"
        >
            ({{ tag }})
        </span>

      </div>
    <!-- Description -->
    <p
      v-if="item.description"
      class="mt-2 text-sm text-muted leading-relaxed max-w-2xl"
    >
      {{ item.description }}
    </p>

  </div>
</template>
<style scoped>
.menu-item {
  transition: all 0.2s ease;
}

.menu-item:hover {
  transform: translateX(4px);
}
</style>