<template>
  <article class="card overflow-hidden group">

    <!-- Image -->
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div class="p-5">

      <div class="flex items-start justify-between gap-4">

        <div>
          <h3 class="text-lg font-medium">
            {{ item.name }}
          </h3>

          <p class="mt-2 text-sm">
            {{ item.description }}
          </p>
        </div>

        <span class="font-medium whitespace-nowrap">
          £{{ item.price }}
        </span>

      </div>

    </div>

  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>