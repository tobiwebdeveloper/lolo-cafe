<script setup>
defineProps({
  review: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article class="card p-8 h-full flex flex-col">

    <!-- Rating -->
    <div class="flex items-center gap-1 text-sm rating mb-5">
      <span v-for="n in review.rating" :key="n">★</span>
    </div>

    <!-- Review -->
    <p class="text-sm leading-7 text-muted italic flex-1">
      "{{ review.description }}"
    </p>

    <!-- Divider -->
    <div class="w-12 h-px bg-black/10 my-6"></div>

    <!-- Author -->
    <div>
      <h3 class="font-medium text-base">
        {{ review.name }}
      </h3>

      <p
        v-if="review.source"
        class="text-xs text-muted mt-1"
      >
        {{ review.source }}
      </p>
    </div>

  </article>
</template>