<script>
import { useAreasConocimientoStore } from "@/stores/areasConocimiento";
import { mapActions, mapState } from "pinia";

export default {
  props: ['dominioClicado'],
  emits: ['area-clicada'],

  data() {
    return {
      nombreAreaAgregada: ''
    }
  },

  computed: {
    ...mapState(useAreasConocimientoStore, ["arrayAreas"]),

    areasDelDominioSeleccionado() {
      if (this.dominioClicado &&
        Array.isArray(this.dominioClicado.idsAreasConocimiento)) {
        return this.arrayAreas.filter(
          area => this.dominioClicado.idsAreasConocimiento.includes(area.id)
        );
      } else {
        return [];
      }
    }
  },

  methods: {
    ...mapActions(useAreasConocimientoStore, ["addArea"]),

    agregarNuevaArea() {
      this.addArea(this.nombreAreaAgregada, this.dominioClicado.id, null);
      this.nombreAreaAgregada = ""
    }
  }

}

</script>

<template>
  <div v-for="area in this.areasDelDominioSeleccionado" :key="area.id" @click="$emit('area-clicada', area)">
    <div class="card mb-3" id="carta">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/components/icons/ComputerScience.png" class="img-fluid rounded-start"
            alt="Imagen del area de conocimiento">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ area.nombre }}</h5>
            <p class="card-text">{{ area.descripcion }}</p>
            <p class="card-text"><small class="text-body-secondary">{{ area.id }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregarArea">
    Agregar nueva area
  </button>

  <!-- Modal -->
  <div class="modal fade" id="modalAgregarArea" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1"
    aria-labelledby="modalAgregarAreaLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalAgregarAreaLabel">Agregar nueva area</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3 needs-validation" @submit.prevent="agregarNuevaArea">
            <div class="col">

              <!-- Nombre del area -->
              <label for="validacionDeNombreDeArea" class="form-label">Nombre del area</label>
              <input type="text" class="form-control" id="validacionDeNombreDeArea" placeholder="Ej. Mecánica"
                v-model="nombreAreaAgregada" required>
              <div class="valid-feedback">
                ¡De acuerdo!
              </div>

              <!-- Descripción del area -->
              <label for="validacionDeArea" class="form-label">Descripción del area</label>
              <textarea class="form-control" id="validacionDeDescripcion"
                placeholder="TIENES QUE IMPLEMENTAR LA DESCRIPCIÓN DEL ÁREA DE CONOCIMIENTO" rows="3" required />
              <div class="valid-feedback">
                ¡De acuerdo!
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Agregar
                area</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#carta {
  max-width: 540px
}
</style>
