<template>
    <div>
      <Button label="Clique em mim" @click="onClick" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Button from 'primevue/button';
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
  