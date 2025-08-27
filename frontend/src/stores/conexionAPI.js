import axios from 'axios'

const host = 'http://localhost:8080/api/'
const API_DOMINIOS = host + 'dominios'
const API_AREAS = host + 'areas'

function llamadaAPI(method, body, path) {
  let config = {
    method: method ?? 'get',
    maxBodyLength: Infinity,
    url: path,
    headers: {},
  }
  if (body) {
    ;(config.data = body), (config.headers['Content-Type'] = 'application/json')
  }
  return axios.request(config)
}

// COMUNES

export function deleteEntidad(entidad) {
  return llamadaAPI('delete', null, cambiarHttpPorHttps(entidad))
}

export function putEntidad(entidad, data) {
  return llamadaAPI('put', data, cambiarHttpPorHttps(entidad))
}

export function cambiarHttpPorHttps(enlace) {
  return enlace.replace('http', 'https').replace('httpss', 'https')
}

// CRUD DOMINIOS

export function getTodosDominios() {
  return llamadaAPI('get', null, API_DOMINIOS)
}

export function postNuevoDominio(data) {
  return llamadaAPI('post', data, API_DOMINIOS)
}

// CRUD AREAS
export function getTodasAreas() {
  return llamadaAPI('get', null, API_DOMINIOS)
}

export function postNuevaArea(data) {
  return llamadaAPI('post', data, API_AREAS)
}

// Generar informe de rendimiento
export function getInformeDeRendimientoEnPeriodo(fechaInicial, fechaFinal, idEmpleado) {
  const API_INFORME_EMPLEADO_PERIODO_CON_QUERY_SELECTORS =
    API_EMPLEADOS_BASE +
    `/${idEmpleado}/search/informe-horas-trabajadas?fechaInicioInforme=${fechaInicial}&fechaFinInforme=${fechaFinal}`
  return llamadaAPI('get', null, API_INFORME_EMPLEADO_PERIODO_CON_QUERY_SELECTORS)
}

// CRUD ASIGNACIONES

export function getAsignaciones() {
  return llamadaAPI('get', null, API_ASIGNACIONES)
}

export function getAsignacionesPorEmpleadoYRangoFechas(datosBusqueda) {
  const API_ASIGNACIONES_POR_EMPLEADO_CON_QUERY_SELECTORS =
    API_ASIGNACIONES_POR_EMPLEADO +
    `?idEmpleado=${datosBusqueda.idEmpleado}&fechaInicio=${datosBusqueda.fechaInicio}&fechaFin=${datosBusqueda.fechaFin}`

  return llamadaAPI('get', null, API_ASIGNACIONES_POR_EMPLEADO_CON_QUERY_SELECTORS)
}

export function postAsignacion(data) {
  return llamadaAPI('post', data, API_ASIGNACIONES)
}

export function patchEntidad(asignacionHref, data) {
  return llamadaAPI('patch', data, cambiarHttpPorHttps(asignacionHref))
}
