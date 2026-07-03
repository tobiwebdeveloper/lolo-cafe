<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <nav class="fixed top-0 z-50 w-full border-b border-black/5 bg-[var(--bg)]">

    <div class="container mx-auto flex h-20 items-center justify-between px-6">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl font-medium tracking-wide"
        @click="closeMenu"
      >
        LOLO
      </RouterLink>

      <!-- Desktop -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <RouterLink to="/" class="link-special">Home</RouterLink>
        <RouterLink to="/about" class="link-special">About</RouterLink>
        <RouterLink to="/menu" class="link-special">Menu</RouterLink>
        <RouterLink to="/gallery" class="link-special">Gallery</RouterLink>
        <RouterLink to="/booking" class="link-special">Book a Table</RouterLink>
      </div>

      <!-- Mobile Button -->
    <button
  class="md:hidden text-2xl leading-none"
  @click="menuOpen = !menuOpen"
  :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
>
   {{ menuOpen ? "✕" : "☰" }}
</button>


    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="md:hidden border-t border-black/5 bg-[var(--bg)]"
      >
        <div class="flex flex-col px-6 py-6">

          <RouterLink to="/" class="py-3" @click="closeMenu">
            Home
          </RouterLink>

          <RouterLink to="/about" class="py-3" @click="closeMenu">
            About
          </RouterLink>

          <RouterLink to="/menu" class="py-3" @click="closeMenu">
            Menu
          </RouterLink>

          <RouterLink to="/gallery" class="py-3" @click="closeMenu">
            Gallery
          </RouterLink>

          <RouterLink
            to="/booking"
            class="btn-primary mt-4 text-center"
            @click="closeMenu"
          >
            Book a Table
          </RouterLink>

        </div>
      </div>
    </Transition>

  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all .25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>