<script setup lang="ts">
import menu from "../data/menu"
import MenuSection from "../components/MenuSection.vue"
</script>

<template>
  <div>

    <!-- HERO -->
    <section class="pt-32 pb-10 text-center">
      <div class="container mx-auto px-6 max-w-3xl">

        <h1 class="text-4xl font-medium">
          Our Menu
        </h1>

        <p class="mt-3 text-muted">
          Freshly prepared daily using simple, honest ingredients.
        </p>

      </div>
    </section>

    <!-- MENU -->
    <MenuSection v-reveal
      v-for="section in menu"
      :key="section.category"
      :section="section"
    />

    <!-- CTA -->
    <section v-reveal="700" class="py-20 text-center">
      <div class="container mx-auto px-6 max-w-2xl">

        <h2 class="text-2xl">
          Ready to visit LOLO?
        </h2>

        <p class="mt-3 text-muted">
          Book a table and enjoy it fresh.
        </p>

        <RouterLink to="/booking" class="btn-primary inline-flex mt-6">
          Book a Table
        </RouterLink>

      </div>
    </section>

  </div>
</template>