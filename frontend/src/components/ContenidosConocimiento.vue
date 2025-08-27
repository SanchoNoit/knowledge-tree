<script>
// Pinia
import { mapActions } from "pinia";
import { useDominiosConocimientoStore } from "@/stores/dominiosConocimiento";

// Componentes
import DominiosConocimiento from "@/components/DominiosConocimiento.vue";
import AreasConocimiento from "@/components/AreasConocimiento.vue";
import Lecciones from "@/components/Lecciones.vue";
import Conceptos from "@/components/Conceptos.vue";
import Temas from "@/components/Temas.vue";

export default {
  components: {
    DominiosConocimiento,
    AreasConocimiento,
    Temas,
    Lecciones,
    Conceptos
  },

  name: 'ContenidosConocimiento',
  data() {
    return {
      nombreDominio: '',
      descripcionDominio: '',

      // Variables para manejar el estado de la vista
      dominioClicado: null,
      areaClicada: null,
      temaClicado: null,
      leccionClicada: null
    };
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
      this.temaClicado = null;
      this.dominioClicado = (this.dominioClicado && this.dominioClicado.id === dominio.id)
        ? null
        : dominio;

    },

    abrirTemas(area) {
      if (!this.areaClicada || this.areaClicada.id !== area.id) {
        this.temaClicado = null;
        this.leccionClicada = null;
      }
      this.areaClicada = (this.areaClicada && this.areaClicada.id === area.id)
        ? null
        : area;
    },

    abrirLecciones(tema) {
      this.leccionClicada = null;
      this.temaClicado = (this.temaClicado && this.temaClicado.id === tema.id)
        ? null
        : tema;
    },

    abrirConceptos(leccion) {
      this.leccionClicada = (this.leccionClicada && this.leccionClicada.id === leccion.id)
        ? null
        : leccion;
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="container col">
        <DominiosConocimiento @dominio-clicado="abrirAreaConocimiento" />
      </div>
      <div class="container col" v-if="dominioClicado">
        <AreasConocimiento :dominioClicado="dominioClicado ?? []" @area-clicada="abrirTemas" />
      </div>
      <div class="container col" v-if="areaClicada">
        <Temas :areaClicada="areaClicada ?? []" @tema-clicado="abrirLecciones" :key="areaClicada?.id" />
      </div>
      <div class="container col" v-if="temaClicado">
        <Lecciones @leccion-clicada="abrirConceptos" :temaClicado="temaClicado ?? []" :key="temaClicado?.id" />
      </div>
      <div class="container col">
        <Conceptos v-if="leccionClicada" :leccionClicada="leccionClicada ?? []" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/scss/_colors.scss";

.card {
  max-width: 540px
}

.card:hover {
  transform: scale(1.05, 1.01);
  transition-duration: 0.25s;
  cursor: pointer;
}

.card-activa {
  transform: scale(1.05, 1.01);
  transition-duration: 0.25s;
  cursor: pointer;
  background-color: $color-primary;
  border-color: $color-warning;
  color: $text-primary;
  border-width: 7px;
}

.card-no-seleccionada {
  transform: scale(1, 1);
  transition-duration: 0.25s;
  cursor: pointer;
  background-color: $color-secondary;
}
</style>
