import { defineStore } from 'pinia'
import DominiosJSON from '@/assets/json/Dominios.json'

class DominioConocimiento {
  constructor(nombre, descripcion, idsAreasConocimiento) {
    this.nombre = nombre
    this.descripcion = descripcion
    this.idsAreasConocimiento = this.#setIdsAreasConocimiento(idsAreasConocimiento)
  }

  #setIdsAreasConocimiento(idsAreasConocimiento) {
    if (idsAreasConocimiento && Array.isArray(idsAreasConocimiento)) {
      this.idsAreasConocimiento = [...idsAreasConocimiento]
    } else {
      this.idsAreasConocimiento = []
    }
  }
}

export const useDominiosConocimientoStore = defineStore('dominiosConocimiento', {
  state: () => ({
    arrayDominios: [...DominiosJSON],
  }),

  getters: {},

  actions: {
    addDominio(nombre, descripcion, idsAreasConocimiento) {
      const dominio = new DominioConocimiento(nombre, descripcion, idsAreasConocimiento)
      this.arrayDominios.push(dominio)
    },
  },
})
