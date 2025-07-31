<script>
import { mapActions, mapState } from "pinia";
import { useDominiosConocimientoStore } from "@/stores/dominiosConocimiento";

export default {

  data() {
    return {
      nombreDominioAgregado: '',
      descripcionDominioAgreado: ''
    }
  },

  emits: ['dominio-clicado'],

  computed: {
    ...mapState(useDominiosConocimientoStore, ["arrayDominios"]),
  },

  methods: {
    ...mapActions(useDominiosConocimientoStore, ["addDominio"]),

    agregarNuevoDominio() {
      if (this.nombreDominioAgregado && this.descripcionDominioAgreado) {
        this.addDominio({
          nombre: this.nombreDominioAgregado,
          descripcion: this.descripcionDominioAgreado
        });
        this.nombreDominioAgregado = '';
        this.descripcionDominioAgreado = '';
      }
    }
  }

}

</script>

<template>
  <div v-for="dominio in this.arrayDominios" :key="dominio.id" @click="$emit('dominio-clicado', dominio)">
    <div class="card mb-3" id="cartaDominio">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/components/icons/ComputerScience.png" class="img-fluid rounded-start" alt="Imagen del dominio">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ dominio.nombre }}</h5>
            <p class="card-text">{{ dominio.descripcion }}</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregarDominio">
    Agregar nuevo dominio
  </button>

  <!-- Modal -->
  <div class="modal fade" id="modalAgregarDominio" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1"
    aria-labelledby="modalAgregarDominioLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalAgregarDominioLabel">Agregar nuevo dominio</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3 needs-validation" @submit.prevent="agregarNuevoDominio">
            <div class="col">

              <!-- Nombre del dominio -->
              <label for="validacionDeTituloDeDominio" class="form-label">Nombre del dominio</label>
              <input type="text" class="form-control" id="validacionDeTituloDeDominio" placeholder="Ej. Física"
                v-model="nombreDominioAgregado" required>
              <div class="valid-feedback">
                ¡De acuerdo!
              </div>

              <!-- Descripción del dominio -->
              <label for="validacionDeDescripcion" class="form-label">Descripción</label>
              <textarea class="form-control" id="validacionDeDescripcion"
                placeholder="Ej. Ciencia que estudia las propiedades de la materia y la energía." rows="3"
                v-model="descripcionDominioAgreado" required />
              <div class="valid-feedback">
                ¡De acuerdo!
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Agregar
                dominio</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
#cartaDominio {
  max-width: 540px
}
</style>
