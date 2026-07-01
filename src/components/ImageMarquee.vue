<script setup>
import { ref, onMounted } from 'vue'
const images = [
  "/lolo-gallery-1.jpg",
  "/lolo-gallery-2.jpg",
  "/lolo-gallery-3.jpg",
  "/lolo-gallery-4.jpg",
]
const loopImages = [...images, ...images]

const offset = ref(0)
const track = ref(null)

onMounted(() => {
  const speed = 1.5 // px per frame

  setInterval(() => {
    offset.value += speed

    const width = track.value.scrollWidth / 2

    // when we reach halfway, reset instantly
    if (offset.value >= width) {
      offset.value = 0
    }
  }, 16) // ~60fps
})
</script>

<template>
  <section class="relative overflow-hidden w-full">
    <div
      ref="track"
      class="flex items-center gap-5"
      :style="{ transform: `translateX(-${offset}px)` }"
    >
    <div
      v-for="(img,index) in loopImages"
      :key="index"
      class="h-screen flex items-center"
    >
      <div class="aspect-[1080/1350] w-[40w] md:w-auto h-full">
        <img
          :src="img"
          class="w-full h-full object-cover opacity-55 hover:opacity-100"
        />
      </div>
    </div>
  </div>
  </section>
</template>
<style scoped>
.marquee {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 2rem;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>