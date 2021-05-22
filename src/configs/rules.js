import moment from "moment";
import { isDate } from "moment";
const url = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator
export default {
  general: {
    requerido: value => (value && Boolean(value)) || "Campo Obligatorio",
    nombre: value => (value && Boolean(value)) || "Debe ingresar un nombre",
    apellido: value => (value && Boolean(value)) || "Debe ingresar un apellido",
    correo:value => !value || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Debes ingresar un correo válido',
    corto: value => (value && Boolean(value)) || "Ingresa el nombre corto",
    descripcion: value =>
      (value && Boolean(value)) || "Ingrese una descripción",
    url: value => (value && url.test(value)) || "Ingrese una URL valida",
    apellido: value => (value && Boolean(value)) || "Ingrese el apellido",
    fecha: value =>
      (value && moment(value).isValid()) || "Ingresa una fecha válida",
    hora: value =>
      (value && moment(value, "HH:mm:ss").isValid()) || "Ingresa una hora válida",
    confirmacion: value =>
      value.toLowerCase() === "confirmo" ||
      "Debes confirmar que entiendes el proceso",
    ciclo: value => (value && Boolean(value)) || "Seleccione el ciclo",
    min8: value =>
    (value.length>7) || "Debe tener al menos 8 caracteres",

  },
  tareas:{
    materias: value =>
    (value.length>0) || "Selecciona una materia",
    unidad: value =>
    (value && Boolean(value)) || "Selecciona una unidad",
  },
  archivos: {
    fotoPerfil: value =>
      !value || value.size < 2000000 || "Avatar size should be less than 2 MB!"
  },
  carrera: {
    nivel: value =>
      (value && Boolean(value)) || "Selecciona el nivel de la carrera",
    nombre: value =>
      (value && Boolean(value)) || "Ingresa el nombre de la carrera",
    corto: value =>
      (value && Boolean(value)) || "Ingresa el nombre corto de la carrera",
    jornada: value =>
      (value && Boolean(value)) || "Ingresa la jornada de la carrera",
    confirmacion: value =>
      value.toLowerCase() === "confirmo" ||
      "Debes confirmar que entiendes el proceso"
  },
  grado: {
    grado: value => (value && Boolean(value)) || "Selecciona el grado",
    seccion: value => (value && Boolean(value)) || "Ingresa la sección"
  },
  unidades: {
    numero: value =>
      (value && Boolean(value)) || "Selecciona el numero de unidad",
    nombre: value =>
      (value && Boolean(value)) || "Ingresa el nombre de la unidad",
    porcentaje: value =>
      (value && Boolean(value)) || "Ingresa el porcentaje de la unidad",
    inicio: {
      fecha: value => (value && Boolean(value)) || "Ingresa la fecha de inicio",
      hora: value => (value && Boolean(value)) || "Ingresa la hora de inicio"
    },
    fin: {
      fecha: value => (value && Boolean(value)) || "Ingresa la fecha de cierre",
      hora: value => (value && Boolean(value)) || "Ingresa la hora de cierre"
    }
  },
  alumno: {
    nombre: value =>
      (value && Boolean(value)) || "Ingrese los nombres del alumno",
    apellido: value =>
      (value && Boolean(value)) || "Ingrese los apellidos del alumno",
    genero: value =>
      (value && Boolean(value)) || "Seleccione el género del alumno",
    idseccion: value =>
      (value && Boolean(value)) || "Seleccione la sección del alumno",
    ciclo: value => (value && Boolean(value)) || "Seleccione el ciclo"
  },
  cuota: {
    obligatorio: value => (value && Boolean(value)) || "Seleccione el ciclo",
    nombre: value =>
      (value && Boolean(value)) || "Ingrese el nombre de la cuota",
    fecha_pago: value =>
      (value && Boolean(value)) || "Ingrese la fecha maxima de pago",
    cantidad: value =>
      (value && Boolean(value)) || "Ingrese la cantidad a pagar por la cuota"
  }
};
