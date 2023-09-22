<template>
  <home-view />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePrimeVue } from 'primevue/config';
import HomeView from './views/HomeView.vue';

const primevue = usePrimeVue();

</script>

