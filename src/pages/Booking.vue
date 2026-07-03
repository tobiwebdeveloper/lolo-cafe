<script setup>
import { ref, computed } from "vue";
import { supabase } from "../utils/supabase";

const booking = ref({
  guests: 2,
  date: null,
  time: "",
  name: "",
  email: "",
  phone: "",
  notes: ""
});

const loading = ref(false);
const success = ref(false);
const errorMsg = ref("");
const today = new Date().toISOString().split("T")[0];


async function submitBooking() {
  const { data: existing } = await supabase
    .from("bookings")
    .select("*")
    .eq("date", booking.value.date)
    .eq("time", booking.value.time);

  if (existing && existing.length > 0) {
    errorMsg.value = "This time slot is already booked.";
    return;
  }

  const { error } = await supabase
    .from("bookings")
    .insert([booking.value]);

  if (error) {
    errorMsg.value = "Booking failed.";
    return;
  }

  success.value = true;
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
          <select v-model="booking.guests" class="input select-input">
            <option v-for="n in 8" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>

              <div>
        <label class="text-sm mb-1">Date</label>

      <input type="date" v-model="booking.date" class="input" :min="today">
      </div>

        <!-- Time -->
        <div>
          <label class="text-sm mb-1">Time</label>
          <select v-model="booking.time" class="input select-input">
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
            <button
      type="submit"
      class="btn-primary w-full"
      :disabled="loading"
    >
      {{ loading ? "Confirming..." : "Confirm Booking" }}
    </button>
      </form>
          <div v-if="success" class="mb-6 p-4  text-green-800">
      Booking confirmed! We’ll see you soon
    </div>

      <div v-if="errorMsg" class="mb-6 p-4 text-red-800">
        {{ errorMsg }}
      </div>

    </div>

  </section>
</template>
<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.7;
  cursor: pointer;
}
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
.select-input {
  
  appearance: none;
  padding-right: 2.5rem;
}
</style>