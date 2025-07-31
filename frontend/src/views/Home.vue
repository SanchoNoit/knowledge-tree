<script>
// Pinia
import { mapActions } from "pinia";
import { useDominiosConocimientoStore } from "@/stores/dominiosConocimiento";

// Componentes
import DominiosConocimiento from "@/components/DominiosConocimiento.vue";
import AreasConocimiento from "@/components/AreasConocimiento.vue";
import Lecciones from "@/components/Lecciones.vue";
import Conceptos from "@/components/Conceptos.vue";

export default {
  components: {
    DominiosConocimiento,
    AreasConocimiento,
    Lecciones,
    Conceptos
  },

  name: 'HomePage',
  data() {
    return {
      nombreDominio: '',
      descripcionDominio: '',

      // Variables para manejar el estado de la vista
      dominioClicado: null,
      areaClicada: null,
      leccionClicada: null
    };
  },

  computed: {

  },

  methods: {
    ...mapActions(useDominiosConocimientoStore, ["addDominio"]),

    addNewDominio(nombreDominio, descripcionDominio) {
      this.addDominio(nombreDominio, descripcionDominio, null);
      this.nombreDominio = '';
      this.descripcionDominio = '';
      this.$refs.form.reset();
    },

    abrirAreaConocimiento(dominio) {
      this.areaClicada = null;
      this.leccionClicada = null;
      this.dominioClicado = (this.dominioClicado && this.dominioClicado.id === dominio.id)
        ? null
        : dominio;
    },

    abrirLecciones(area) {
      this.leccionClicada = null;
      this.areaClicada = (this.areaClicada && this.areaClicada.id === area.id)
        ? null
        : area;
    },

    abrirConceptos(leccion) {
      this.leccionClicada = leccion;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="container col">
        <DominiosConocimiento @dominio-clicado="abrirAreaConocimiento" />
      </div>
      <div class="container col" v-if="dominioClicado">
        <AreasConocimiento :dominioClicado="dominioClicado ?? []" @area-clicada="abrirLecciones" />
      </div>
      <div class="container col" v-if="areaClicada">
        <Lecciones :areaClicada="areaClicada ?? []" @leccion-clicada="abrirConceptos" />
      </div>
      <div class="container col">
        <Conceptos v-if="leccionClicada" :leccionClicada="leccionClicada ?? []" />
      </div>
    </div>
  </div>

  <!-- DIV de creación de nuevos Dominios del conocimiento -->
  <div id="segundoFrame" class="row justify-content-center align-items-center my-5 mx-2 px-3 text">
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-12">
        <label for="validacionParaNombreDominio" class="form-label">Nombre del dominio</label>
        <input v-model="nombreDominio" type="text" class="form-control" id="validacionParaNombreDominio"
          placeholder="Ciencias de la computación, Física, Filosofía..." required>
        <div class="valid-feedback">
          ¡De acuerdo!
        </div>
      </div>
      <div class="col-md-12">
        <label for="validacionParaDescripcionDominio" class="form-label">Descripción del dominio</label>
        <textarea v-model="descripcionDominio" type="textarea" class="form-control"
          id="validacionParaDescripcionDominio" placeholder="Decripción breve del dominio" required></textarea>
        <div class="valid-feedback">
          ¡De acuerdo!
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" @click="addDominio(nombreDominio, descripcionDominio)">Guardar
          dominio</button>
      </div>
    </form>
  </div>


</template>
