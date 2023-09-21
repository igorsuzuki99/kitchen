<template>
    <div class="container">
      <div class="component-title">
        <h1>DASHBOARD</h1>
      </div>
  
      <div class="card-container">
        <!-- Primeiro Card -->
        <div class="card">
          <!-- Conteúdo do primeiro card aqui -->
        </div>
  
        <!-- Segundo Card -->
        <div class="card">
          <!-- Conteúdo do segundo card aqui -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'painel'
  }
  </script>
  
  <style>
  
  /* Estilos para os cards */
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Espaço entre os cards */
  }
  
  .card {
    width: 550px; /* Largura do card */
    height: 250px; /* Altura do card */
    border: 1px solid #ff0000;
    margin-top: 30px;
  }

  </style>
  