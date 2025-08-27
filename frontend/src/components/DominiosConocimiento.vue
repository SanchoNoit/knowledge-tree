<script>
import { mapActions, mapState } from "pinia";
import { useDominiosConocimientoStore } from "@/stores/dominiosConocimiento";

export default {

  data() {
    return {
      nombreDominioAgregado: '',
      descripcionDominioAgregado: '',
      dominioClicado: null,
    }
  },

  emits: ['dominio-clicado'],

  computed: {
    ...mapState(useDominiosConocimientoStore, ["arrayDominios"]),
  },

  methods: {
    ...mapActions(useDominiosConocimientoStore, ["addDominio", "cargarTodosLosDominios"]),

    agregarNuevoDominio() {
      if (this.nombreDominioAgregado && this.descripcionDominioAgregado) {
        this.addDominio({
          nombre: this.nombreDominioAgregado,
          descripcion: this.descripcionDominioAgregado
        });
        this.nombreDominioAgregado = '';
        this.descripcionDominioAgregado = '';
      }
    },

    definirDominioClicado(dominio) {
      this.dominioClicado = dominio.id === this.dominioClicado?.id ? null : dominio;
      this.$emit('dominio-clicado', dominio);
    },

    async cargarDominiosDesdeBaseDatos() {
      await this.cargarTodosLosDominios();
      console.log("Dominios cargados desde la base de datos");
    }
  }

}

</script>

<template>
  <div v-for="dominio in this.arrayDominios" :key="dominio.id" @click="definirDominioClicado(dominio)">
    <div class="card mb-3"
      :class="{ 'card-activa': dominioClicado && dominioClicado.id === dominio.id, 'card-no-seleccionada': dominioClicado && dominioClicado.id !== dominio.id }">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/components/icons/ComputerScience.png" class="img-fluid rounded-start" alt="Imagen del dominio">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {{ dominio.nombre }}</h5>
            <p class="card-text text-end">
              Aquí van iconos del CRUD
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Cargar dominios desde BBDD -->
  <button class="btn btn-secondary" @click="cargarDominiosDesdeBaseDatos">
    Cargar dominios desde la BBDD
  </button>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregarDominio">
    Agregar nuevo dominio
  </button>

  <!-- Modal -->
  <div class="modal fade" id="modalAgregarDominio" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1"
    aria-labelledby="modalAgregarDominioLabel">
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
                v-model="descripcionDominioAgregado" required></textarea>
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
