<script setup lang="ts">
import AboutSection from '../components/AboutSection.vue';
import IntroducingSection from '../components/IntroducingSection.vue';
import QuoteBlock from "../components/QuoteBlock.vue";
</script>

<template>
<AboutSection v-reveal="0" />
<QuoteBlock v-reveal="0" />

<IntroducingSection v-reveal="0"/>
</template>