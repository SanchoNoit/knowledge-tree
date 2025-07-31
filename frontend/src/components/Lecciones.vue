<script>
import { useLeccionesStore } from "@/stores/lecciones";
import { mapState } from "pinia";

export default {
  props: ['areaClicada'],
  emits: ['leccion-clicada'],

  computed: {
    ...mapState(useLeccionesStore, ["arrayLecciones"]),
    leccionesDelAreaSeleccionada() {
      if (this.areaClicada &&
        Array.isArray(this.areaClicada.idsLecciones)) {
        return this.arrayLecciones.filter(
          leccion => this.areaClicada.idsLecciones.includes(leccion.id)
        );
      } else {
        return [];
      }
    }
  }
}
</script>

<template>
  <div v-for="leccion in this.leccionesDelAreaSeleccionada" :key="leccion.id"
    @click="$emit('leccion-clicada', leccion)">
    <div class="card mb-3" id="carta">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/components/icons/ComputerScience.png" class="img-fluid rounded-start" alt="Imagen de la lección">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ leccion.titulo }}</h5>
            <p class="card-text">{{ leccion.contenido }}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                {{ leccion.completada ? '✅ Lección finalizada' : "📚 Lección por finalizar" }}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
