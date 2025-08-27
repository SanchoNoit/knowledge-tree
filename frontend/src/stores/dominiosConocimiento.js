import { defineStore } from 'pinia'
import DominiosJSON from '@/assets/json/Dominios.json'
import { getTodosDominios } from '@/stores/conexionAPI.js'

class DominioConocimiento {
  constructor(nombre, descripcion, idsAreasConocimiento, hrefPropio) {
    this.nombre = nombre
    this.descripcion = descripcion
    this.idsAreasConocimiento = this.#setIdsAreasConocimiento(idsAreasConocimiento)
    this.id = hrefPropio
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
    cargarTodosLosDominios() {
      return getTodosDominios().then((response) => {
        this.arrayDominios = response.data._embedded.dominios.map(
          (dominio) =>
            new DominioConocimiento(
              dominio.nombre,
              dominio.descripcion,
              dominio.idsAreasConocimiento,
              dominio._links.self.href,
            ),
        )
      })
    },

    addDominio(nombre, descripcion, idsAreasConocimiento) {
      const dominio = new DominioConocimiento(nombre, descripcion, idsAreasConocimiento)
      this.arrayDominios.push(dominio)
    },

    agregarAreaADominio(idDominio, idArea) {
      const dominio = this.arrayDominios.find((d) => d.id === idDominio)
      if (dominio && !dominio.idsAreasConocimiento.includes(idArea)) {
        dominio.idsAreasConocimiento.push(idArea)
      }
    },
  },
})
