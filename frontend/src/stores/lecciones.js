import { defineStore } from 'pinia'
import LeccionesJSON from '@/assets/json/Lecciones.json'

class Leccion {
  constructor(titulo, contenido, completada, conceptos) {
    this.id = Math.random().toString(36).slice(2, 9)
    this.titulo = titulo ?? 'Título de la lección'
    this.contenido = contenido ?? 'Descripción de la lección'
    this.completada = completada ?? false
    this.idConceptos = conceptos ?? []
    this.idTema = []
  }
}

export const useLeccionesStore = defineStore('lecciones', {
  state: () => ({
    arrayLecciones: [...LeccionesJSON],
  }),

  getters: {},

  actions: {
    addLeccion(titulo, contenido, completada, conceptos) {
      const leccion = new Leccion(titulo, contenido, completada, conceptos)
      this.arrayLecciones.push(leccion)
    },
  },
})
