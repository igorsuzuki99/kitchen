<template>
    <div>
      <h2>Tabela Genérica</h2>
      <p>Esta é uma tabela de exemplo:</p>
      
      <DataTable :value="tableData">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="email" header="E-mail"></Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { DataTable, Column } from 'primevue/datatable';
  
  export default {
    components: {
      DataTable,
      Column,
    },
    setup() {
      const tableData = ref([
        { id: 1, name: 'Usuário 1', email: 'usuario1@example.com' },
        { id: 2, name: 'Usuário 2', email: 'usuario2@example.com' },
        { id: 3, name: 'Usuário 3', email: 'usuario3@example.com' },
      ]);
  
      return {
        tableData,
      };
    },
  };
  </script>
  