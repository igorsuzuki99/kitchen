<template>
    <header class="shadow-2 w-screen fixed z-2">
      <Toolbar class="bg-white">
        <template #start>
          <Button :icon="switchBarsCloseIcon" text plain rounded aria-label="Bookmark" @click="layoutStore.toggleSideBar" />
          <span class="cloudkitchen">CLOUD KITCHEN</span>
        </template>
        <template #end>
          <template v-if="width > 576">
            <Button
              icon="pi pi-bell"
              badge="8"
              badge-class="p-badge-danger"
              text
              plain
              rounded
              outlined
              class="mr-2 bell-button"            />
            <Button icon="pi pi-user" class="mr-2" text plain rounded aria-label="Bookmark" />
          </template>
          <Button icon="pi pi-cog" text plain rounded aria-label="Bookmark" />
        </template>
      </toolbar>
    </header>
  </template>
  <script setup lang="ts">
  import Toolbar from 'primevue/toolbar';
  import Button from 'primevue/button';
  import { useLayoutStore } from '@/stores/layout';
  import { useWindowSize } from '@vueuse/core';
  import { computed } from 'vue';
  
  const { width } = useWindowSize();
  const layoutStore = useLayoutStore();
  const switchBarsCloseIcon = computed(() => layoutStore.IsSideBarOpen ? 'pi pi-times' : 'pi pi-bars');
  
  </script>

<style>
.cloudkitchen{
  margin-left: 14px;
}
</style>
