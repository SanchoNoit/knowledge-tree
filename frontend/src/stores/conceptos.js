import { defineStore } from 'pinia'
import ConceptosJSON from '@/assets/json/Conceptos.json'

class Concepto {
  constructor(id, titulo, descripcion) {
    this.id = id || Math.random().toString(36).slice(2, 9)
    this.titulo = titulo || 'Título del concepto'
    this.descripcion = descripcion || 'Descripción del concepto'
    this.idLeccion = null
  }
}

export const useConceptosStore = defineStore('conceptos', {
  state: () => ({
    arrayConceptos: [...ConceptosJSON],
  }),

  getters: {},

  actions: {
    addConcepto(titulo) {
      const concepto = new Concepto(null, titulo, descripcion)
      this.arrayConceptos.push(concepto)
    },
  },
})
