<template>
    <div class="full-width-navbar">
      <header-component></header-component>
    </div>
    <div class="sidebar">
    <transition>
      <side-menu-component
        v-show="layoutStore.IsSideBarOpen"
        class="lg:pt-8 shadow-2"
        :class="{'fadeinleft animation-duration-200': layoutStore.IsSideBarOpen, 'fadeoutleft animation-duration-200': !layoutStore.IsSideBarOpen }"
      />
    </transition>
    </div>
    <div class="flex-1">
      <RouterView></RouterView>
    </div>
</template>
  
  <script setup lang="ts">
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { useLayoutStore } from '@/stores/layout';
  import SideMenuComponent from '@/components/SideMenuComponent.vue';
  import { RouterView } from 'vue-router';

  const layoutStore = useLayoutStore();
  </script>
  
  <style scoped>
  .full-width-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;

    z-index: 2; /* Ajuste a profundidade conforme necessário */
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
  }
  </style>
  