<script setup>
import { ref } from "vue";

const emit = defineEmits(["next"]);

const selectedGuests = ref(null);

const guests = [1, 2, 3, 4, 5, 6, 7, "8+"];
</script>

<template>
  <div class="max-w-2xl mx-auto">

    <h2 class="text-3xl text-center">
      How many guests?
    </h2>

    <p class="text-center text-muted mt-2">
      Select the number of people for your booking.
    </p>

    <div class="grid grid-cols-4 gap-4 mt-10">

      <button
        v-for="guest in guests"
        :key="guest"
        @click="selectedGuests = guest"
        class="guest-card"
        :class="{ active: selectedGuests === guest }"
      >
        {{ guest }}
      </button>

    </div>

    <div class="flex justify-center mt-10">

      <button
        class="btn-primary"
        :disabled="!selectedGuests"
        @click="emit('next')"
      >
        Continue
      </button>

    </div>

  </div>
</template>