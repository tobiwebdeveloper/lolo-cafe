<script setup>
import { PhoneIcon, MapPinIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <footer class="border-t border-black/10 mt-20">

    <div class="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-semibold">LOLO</h2>
        <p class="mt-2 text-muted text-sm">
          Fresh coffee. Simple food. Real flavour.
        </p>
      </div>

      <!-- Links -->
      <div class="flex flex-col gap-2 text-sm">
        <RouterLink to="/" class="link">Home</RouterLink>
           <RouterLink to="/about" class="link">About</RouterLink>
        <RouterLink to="/menu" class="link">Menu</RouterLink>
        <RouterLink to="/gallery" class="link">Gallery</RouterLink>
        <RouterLink to="/booking" class="link">Book a Table</RouterLink>
      </div>

      <!-- Contact -->
      <div class="text-sm text-muted space-y-3">

        <div class="flex items-center gap-2">
          <PhoneIcon class="w-4 h-4" />
          <span>01438 315328</span>
        </div>

        <div class="flex items-center gap-2">
          <ChatBubbleLeftEllipsisIcon class="w-4 h-4" />
          <span>instagram.com/lolocafebistro_</span>
        </div>

        <div class="flex items-center gap-2">
          <MapPinIcon class="w-4 h-4" />
          <span>116 High St, Stevenage, UK</span>
        </div>

      </div>

    </div>

    <!-- Bottom bar -->
    <div class="border-t border-black/10 py-6 text-center text-xs text-muted">
      © 2026 LOLO Café Bistro. All rights reserved.
    </div>

  </footer>
</template>