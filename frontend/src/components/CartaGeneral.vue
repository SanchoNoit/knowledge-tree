<script>
export default {
  props: ['dominio'],
};

</script>

<template>
  <div class="card">
    <h5 class="card-header">{{ dominio.nombre }}</h5>
    <div class="card-body">
      <h5 class="card-title">Descripción</h5>
      <p class="card-text">{{ dominio.descripcion }}</p>
      <!-- TODO: TAGS -->
      <p>#TAGS</p>
    </div>
  </div>
</template>
