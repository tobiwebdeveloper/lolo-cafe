<script setup>
import { computed } from "vue";
import MenuCard from "./MenuCard.vue";
import menu from "../data/menu.ts";

const categories = computed(() => {
  const unique = new Set(menu.map(item => item.category));
  return ["All", ...unique];
});
</script>
<template>
  <div>

    <!-- HERO -->
    <section class="pt-32 pb-10 text-center">
      <div class="container mx-auto px-6 max-w-3xl">

        <h1 class="text-4xl font-semibold">
          Our Menu
        </h1>

        <p class="mt-3 text-muted">
          Freshly prepared every day with simple, honest ingredients.
        </p>

      </div>
    </section>



    <!-- MENU GRID -->
    <section class="pb-20">
      <div class="container mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <MenuCard
            v-for="item in menu"
            :key="item.id"
            :item="item"
          />

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="pb-24 text-center">
      <div class="container mx-auto px-6 max-w-2xl">

        <h2 class="text-2xl font-medium">
          Fancy a visit?
        </h2>

        <p class="mt-3 text-muted">
          Book a table and enjoy LOLO in person.
        </p>

        <RouterLink
          to="/contact"
          class="btn-primary inline-flex mt-6"
        >
          Book a Table
        </RouterLink>

      </div>
    </section>

  </div>
</template>