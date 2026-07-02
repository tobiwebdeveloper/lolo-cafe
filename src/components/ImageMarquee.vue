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
  <section class="marquee">

    <div class="marquee-track">

      <div v-for="(img, i) in images.concat(images)" :key="i" class="marquee-item">

        <img :src="img" />

      </div>

    </div>

  </section>
</template>
<style scoped>
.marquee {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 1.5rem;
  animation: scroll 25s linear infinite;
}

.marquee-item {
  flex: 0 0 auto;
  height: 80vh;
}

.marquee-item img {
  height: 100%;
  width: auto;
  object-fit: cover;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.marquee-item img:hover {
  opacity: 1;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>