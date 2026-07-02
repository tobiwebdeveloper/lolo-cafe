<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import Location from '../components/Location.vue';
import Testimonials from '../components/Testimonials.vue';
import TrustSection from '../components/TrustSection.vue';
import MenuSection from '../components/MenuHero.vue'

</script>

<template>
    <HeroSection v-reveal="0" />
     <div class="divider"></div>
    <TrustSection v-reveal="0" />
    <div class="divider"></div>
    <Testimonials v-reveal="0"/>
    <MenuSection v-reveal="0"/>
    <Location v-reveal="50"/>
</template>