import { defineStore, mapActions } from 'pinia'
import AreasJSON from '@/assets/json/Areas.json'
import { useDominiosConocimientoStore } from './dominiosConocimiento'
import { postNuevaArea } from '@/stores/conexionAPI'

class AreaConocimiento {
  constructor(nombre, idDominio, idsTemas) {
    this.id = Math.random().toString(36).slice(2, 9)
    this.nombre = nombre
    this.idsTemas = Array.isArray(idsTemas) ? idsTemas : idsTemas ? [idsTemas] : []
    this.idDominio = idDominio
  }
}

export const useAreasConocimientoStore = defineStore('areasConocimiento', {
  state: () => ({
    arrayAreas: [...AreasJSON],
  }),

  getters: {},

  actions: {
    ...mapActions(useDominiosConocimientoStore, ['agregarAreaADominio']),

    cargarAreasDeDominioDesdeAPI() {},

    addArea(nombre, idDominio, idsTemas) {
      const area = new AreaConocimiento(nombre, idDominio, idsTemas)
      this.agregarAreaADominio(area.idDominio, area.id)
      this.arrayAreas.push(area)
    },
  },
})
