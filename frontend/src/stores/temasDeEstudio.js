import { defineStore } from 'pinia'

class TemaDeEstudio {
  constructor(nombre, dificultad, lecciones) {
    this.nombre = nombre
    this.dificultad = dificultad
    this.lecciones = lecciones
  }
}

export const useTemasDeEstudioStore = defineStore('temasDeEstudio', {
  state: () => ({
    arrayTemas: [],
  }),

  getters: {},

  actions: {
    addTema(nombre, dificultad, lecciones) {
      const tema = new TemaDeEstudio(nombre, dificultad, lecciones)
      this.arrayTemas.push(tema)
    },
  },
})
