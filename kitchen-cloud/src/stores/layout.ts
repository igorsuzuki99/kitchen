import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', () => {
  const IsSideBarOpen = ref(true);

  const toggleSideBar = () => {
    IsSideBarOpen.value = !IsSideBarOpen.value;
  };

  return {
    IsSideBarOpen,
    toggleSideBar
  };
});