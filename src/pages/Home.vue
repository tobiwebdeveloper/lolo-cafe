<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import Location from '../components/Location.vue';
import Testimonials from '../components/Testimonials.vue';
import TrustSection from '../components/TrustSection.vue';
import MenuSection from '../components/MenuHero.vue'

</script>

<template>
    <HeroSection />
     <div class="divider"></div>
    <TrustSection />
    <div class="divider"></div>
    <Testimonials />
    <MenuSection />
    <Location />
</template>