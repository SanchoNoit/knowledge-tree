<script>
import { useLeccionesStore } from "@/stores/lecciones";
import { mapState } from "pinia";

export default {
  props: ['temaClicado'],
  emits: ['leccion-clicada'],

  data() {
    return {
      leccionClicada: null
    };
  },

  computed: {
    ...mapState(useLeccionesStore, ['arrayLecciones']),

    leccionesDelTemaSeleccionado() {
      if (this.temaClicado &&
        Array.isArray(this.temaClicado.idsLecciones)) {
        return this.arrayLecciones.filter(
          leccion => this.temaClicado.idsLecciones.includes(leccion.id)
        );
      } else {
        return [];
      }
    }
  },

  methods: {
    definirLeccionClicada(leccion) {
      this.leccionClicada = (this.leccionClicada && this.leccionClicada.id === leccion.id)
        ? null
        : leccion;
      this.$emit('leccion-clicada', leccion);
    }
  }
}
</script>

<template>
  <div v-for="leccion in this.leccionesDelTemaSeleccionado" :key="leccion.id" @click="definirLeccionClicada(leccion)">
    <div class="card mb-3" :class="{
      'card-activa': leccionClicada && leccionClicada.id === leccion.id,
      'card-no-seleccionada': leccionClicada && leccionClicada.id !== leccion.id
    }">
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
