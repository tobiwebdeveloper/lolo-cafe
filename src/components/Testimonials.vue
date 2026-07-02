<template>
  <section class="py-20 w-full min-h-screen flex justify-center items-center">
    <div class="container mx-auto px-6 max-w-5xl">

      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-heading text-3xl font-bold text-text">
          What Our Customers Say
        </h2>
        <p class="text-text-muted mt-2">
          Real experiences from people who love our café.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid gap-8 md:grid-cols-3">
        <TestimonialCard
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import reviews from "../data/testimonials.ts";
import TestimonialCard from "../components/TestimonialCard.vue";
</script>
