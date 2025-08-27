<script>
import { mapState } from "pinia";
import { useTemasDeEstudioStore } from "@/stores/temas";

export default {
  emits: ['tema-clicado'],
  props: ['areaClicada'],

  data() {
    return {
      temaClicado: null,
    }
  },

  computed: {
    ...mapState(useTemasDeEstudioStore, ["arrayTemas"]),

    temasDelAreaSeleccionada() {
      if (this.areaClicada && Array.isArray(this.areaClicada.idsTemas)) {
        return this.arrayTemas.filter(
          tema => this.areaClicada.idsTemas.includes(tema.id)
        );
      } else {
        return [];
      }
    }
  },

  methods: {
    definirTemaClicado(tema) {
      this.temaClicado = (this.temaClicado && this.temaClicado.id === tema.id)
        ? null
        : tema;
      this.$emit('tema-clicado', tema);
    }
  },
};
</script>

<template>
  <div v-for="tema in this.temasDelAreaSeleccionada" :key="tema.id" @click="definirTemaClicado(tema)">
    <div class="card mb-3" :class="{
      'card-activa': temaClicado && temaClicado.id === tema.id,
      'card-no-seleccionada': temaClicado && temaClicado.id !== tema.id
    }">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/components/icons/ComputerScience.png" class="img-fluid rounded-start" alt="Imagen del tema">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ tema.nombre }}</h5>
            <p class="card-text">{{ tema.dificultad }}</p>
            <p class="card-text"><small class="text-body-secondary">{{ tema.id }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
