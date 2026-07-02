<template>
  <section class="py-24 fade-up">

    <div class="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

      <!-- Content -->
      <div class="space-y-8">

        <div class="space-y-4">

          <p class="uppercase tracking-[0.2em] text-sm text-muted">
            Welcome Inside
          </p>

          <h2>
            A place to slow down and enjoy.
          </h2>

          <p class="text-muted">
            From your morning coffee to a relaxed lunch with friends,
            LOLO Café Bistro is designed to feel warm, welcoming and
            comfortable. Every visit is about great food, quality coffee
            and a space where everyone feels at home.
          </p>

          <p class="text-muted">
            Whether you're stopping in for a quick bite or spending the
            afternoon catching up, we hope every visit leaves you looking
            forward to the next.
          </p>


        </div>


        <RouterLink
          to="/gallery"
          class="btn-primary inline-flex"
        >
          View Gallery
        </RouterLink>

      </div>

      <!-- Image -->
      <div>

        <img
          src="/lolo-gallery-2.jpg"
          alt="Inside LOLO Café Bistro"
          class="w-full h-[600px] rounded-xl object-cover shadow-lg brightness-75 hover:brightness-100 transition-all duration-300"
        >

      </div>

    </div>

  </section>
</template>
<script setup>
import QuoteBlock from '../components/QuoteBlock.vue'
</script>