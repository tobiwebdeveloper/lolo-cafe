<script setup>
import { ref, computed } from "vue";

const booking = ref({
  guests: 2,
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  notes: ""
});
const timeSlots = computed(() => {
  const slots = [];

  for (let hour = 8; hour <= 17; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    if (hour !== 17) {
      slots.push(`${String(hour).padStart(2, "0")}:30`);
    }
  }

  return slots;
});
function submitBooking() {
  console.log("BOOKING:", booking.value);
}
</script>
<template>
  <section v-reveal class="py-24 min-h-screen flex items-center justify-center">

    <div class="container mx-auto max-w-2xl">

      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl mt-20">
          Reserve a Table
        </h1>

        <p class="text-muted mt-3">
          LOLO Café Bistro • Open 08:00 – 17:00
        </p>
      </div>

      <form @submit.prevent="submitBooking" class="space-y-5">

        <!-- Guests -->
        <div>
          <label class="text-sm mb-1">Guests</label>
          <select v-model="booking.guests" class="input">
            <option v-for="n in 8" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>

        <!-- Date -->
        <div>
          <label class="text-sm mb-1">Date</label>
          <input type="date" v-model="booking.date" class="input">
        </div>

        <!-- Time -->
        <div>
          <label class="text-sm mb-1">Time</label>
          <select v-model="booking.time" class="input">
            <option disabled value="">Select a time</option>

            <option
              v-for="time in timeSlots"
              :key="time"
              :value="time"
            >
              {{ time }}
            </option>
          </select>
        </div>

        <!-- Name -->
        <input
          v-model="booking.name"
          class="input"
          placeholder="Full name"
        >

        <!-- Email -->
        <input
          v-model="booking.email"
          class="input"
          placeholder="Email address"
        >

        <!-- Phone -->
        <input
          v-model="booking.phone"
          class="input"
          placeholder="Phone number"
        >

        <!-- Notes -->
        <textarea
          v-model="booking.notes"
          class="input"
          placeholder="Special requests (optional)"
        ></textarea>

        <!-- Submit -->
        <button type="submit" class="btn-primary w-full">
          Confirm Booking
        </button>

      </form>

    </div>

  </section>
</template>
<style scoped>
.input {
  width: 100%;
  padding: 0.9rem 1rem;

  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);

  outline: none;
  transition: all 0.2s ease;
}


.input:focus {
  border-color: var(--text);
}
</style>