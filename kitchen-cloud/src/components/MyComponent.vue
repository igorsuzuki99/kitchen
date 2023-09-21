<template>
    <div>
        <app-topbar></app-topbar>
      <Button label="Clique em mim" @click="onClick" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Button from 'primevue/button';
  import AppTopbar from './AppTopBarComponent.vue';
  export default defineComponent({
    components: {
      Button
    },
    methods: {
      onClick() {
        alert('Botão clicado!');
      }
    }
  });
  </script>
  