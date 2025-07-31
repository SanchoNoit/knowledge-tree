import { defineStore } from 'pinia'
import AreasJSON from '@/assets/json/Areas.json'

class AreaConocimiento {
  constructor(nombre, idDominio, idsLecciones) {
    this.id = Math.random().toString(36).slice(2, 9)
    this.nombre = nombre
    this.idsLecciones = Array.isArray(idsLecciones)
      ? idsLecciones
      : idsLecciones
        ? [idsLecciones]
        : []
    this.idDominio = idDominio
  }
}

export const useAreasConocimientoStore = defineStore('areasConocimiento', {
  state: () => ({
    arrayAreas: [...AreasJSON],
  }),

  getters: {},

  actions: {
    addArea(nombre, idDominio, idsLecciones) {
      const area = new AreaConocimiento(nombre, idDominio, idsLecciones)
      this.arrayAreas.push(area)
    },
  },
})
