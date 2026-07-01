<script setup>
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue';
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

document.documentElement.setAttribute(
  "data-theme",
  prefersDark.matches ? "dark" : "light"
);

prefersDark.addEventListener("change", (e) => {
  document.documentElement.setAttribute(
    "data-theme",
    e.matches ? "dark" : "light"
  );
});


</script>

<template>
  <Navbar />
<router-view />
<Footer />
</template>
