<script>
import { useConceptosStore } from "@/stores/conceptos";
import { mapState } from "pinia";

export default {
  props: ['leccionClicada'],

  computed: {
    ...mapState(useConceptosStore, ["arrayConceptos"]),
    conceptosDeLaLeccionSeleccionada() {
      if (this.leccionClicada &&
        Array.isArray(this.leccionClicada.idConceptos)) {
        return this.arrayConceptos.filter(
          concepto => this.leccionClicada.idConceptos.includes(concepto.id)
        );
      } else {
        return [];
      }
    }
  },

  methods: {
    mostrarAlerta(titulo) {
      window.alert(titulo);
    }
  }
}
</script>
<template>
  <div v-for="concepto in this.conceptosDeLaLeccionSeleccionada" :key="concepto.id"
    @click="mostrarAlerta(concepto.titulo)">
    <div class="card mb-3" id="carta">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/components/icons/ComputerScience.png" class="img-fluid rounded-start" alt="Imagen del concepto">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ concepto.titulo }}</h5>
            <p class="card-text">{{ concepto.descripcion }}</p>
            <p class="card-text"><small class="text-body-secondary">Bichiribúm bidán</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
