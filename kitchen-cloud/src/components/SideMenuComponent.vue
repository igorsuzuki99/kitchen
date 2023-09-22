<template>
    <aside
      class="sidemenu-container p-0 bg-white h-screen z-2 fixed lg:static lg:z-1"
    >
      <ul class="list-none p-1">
        <RouterLink to="/painel">
        <li> 
          <Button
            class="m-1"
            icon="pi pi-home"
            text
            plain
            rounded
            aria-label="Bookmark"
            label="Painel"
          />
        </li>
        </RouterLink>
        <li>
          <Button
            class="m-1"
            icon="pi pi-chart-pie"
            text
            plain
            rounded
            aria-label="Bookmark"
            label="Dashboard"
          />
        </li>
        <li>
          <Button
            class="m-1"
            icon="pi pi-sign-out"
            text
            plain
            rounded
            aria-label="Bookmark"
            label="Sair"
          />
        </li>
      </ul>
    </aside>
  </template>
  <script setup lang="ts">
  import Button from 'primevue/button';
  
  </script>
  <style scoped>
  .sidemenu-container {
    background-color: #f8f9fa;
    border-right: 1px solid #dee2e6;
    top: 72px;
  }
  </style>