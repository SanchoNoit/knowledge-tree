import { defineStore } from 'pinia'
import TemasJSON from '@/assets/json/Temas.json'

class TemaDeEstudio {
  constructor(nombre, dificultad, idsLecciones) {
    this.id =
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    this.nombre = nombre
    this.dificultad = dificultad
    this.idsLecciones = idsLecciones
  }
}

export const useTemasDeEstudioStore = defineStore('temasDeEstudio', {
  state: () => ({
    arrayTemas: [...TemasJSON],
  }),

  getters: {},

  actions: {
    addTema(nombre, dificultad, idsLecciones) {
      const tema = new TemaDeEstudio(nombre, dificultad, idsLecciones)
      this.arrayTemas.push(tema)
    },
  },
})
