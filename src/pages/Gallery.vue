<template>
  <div>

    <!-- HERO -->
    <section v-reveal class="pt-32 pb-10 text-center">
      <div class="container max-w-2xl mx-auto px-6">

        <h1 class="text-4xl">
          Our Gallery
        </h1>

        <p class="text-muted mt-3">
          A glimpse into the atmosphere, coffee, and food at LOLO.
        </p>

      </div>
    </section>

    <!-- MARQUEE (VIBE STRIP) -->
    <section class="py-16">
      <ImageMarquee />
    </section>
    <div class="divider m-10">
     
    </div>

    
    <!-- CTA -->
    <section v-reveal class="text-center pb-24">
         <div class="container max-w-xl mx-auto px-6">
              
              <h2 class="text-2xl">
                   Want to experience it in person?
               </h2>

        <p class="text-muted mt-3">
          Book a table and enjoy LOLO Café Bistro.
        </p>

        <RouterLink to="/contact" class="btn-primary inline-flex mt-6">
          Book a Table
        </RouterLink>

      </div>
    </section>

    <!-- GRID GALLERY -->
    <section v-reveal="100" class="py-10">
      <div class="container mx-auto px-6 w-full">
    
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    
          <div
            v-for="n in 9"
            :key="n"
            class="aspect-square overflow-hidden group"
          >
            <img
              :src="`/lolo-gallery-${n}.jpg`"
              class="w-full h-full hover:border-2 object-cover transition duration-300"
            />
          </div>
    
        </div>
    
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ImageMarquee from "../components/ImageMarquee.vue";
</script>