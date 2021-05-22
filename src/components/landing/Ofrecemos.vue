<template>
  <v-container class="py-4">
    <v-row>
      <v-col cols="12">
        <h3>En nuestra Propuesta Educativa Ofrecemos</h3>
      </v-col>
      <v-col v-for="(item, i) in features" :key="i" cols="12" md="6">
        <div class="d-flex">
          <div class="mr-2">
            <v-sheet outlined rounded class="pa-2 elevation-1">
              <v-icon x-large>{{ item.icon }}</v-icon>
            </v-sheet>
          </div>
          <div>
            <div class="text-h5">{{ item.title }}</div>
            <div class="text-h6 font-weight-light mt-1">
              {{ item.description }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "mdi-map-marker",
          title: "Excelente Ubicación",
          description:
            "Contamos con una excelente ubicación en el centro del municipio de san Luis Jilotepeque, para la seguridad de nuestros estudiantes",
        },
        {
          icon: "mdi-domain",
          title: "Amplias Instalaciones",
          description:
            "Contamos con amplias instalaciones permiten un desarrollo cómodo y seguro del estudiante",
        },
        {
          icon: "mdi-atom",
          title: "Aulas Por Materia",
          description:
            "Nuestras aulas están distribuidas por materias para mejor comprensión de las áreas educativas",
        },
        {
          icon: "mdi-projector-screen-outline",
          title: "Aulas Multimedia",
          description:
            "En nuestra institución, las aulas cuentan con proyectores y equipo de audio para una mejor comprensión de los temas por medio de material audiovisual",
        },
        {
          icon: "mdi-desktop-classic",
          title: "Laboratorio de Computación",
          description:
            "Contamos con un laboratorio de computación con equipo de ultima generación, proyectores, equipos de audio y aire acondicionado.",
        },
        {
          icon: "mdi-cellphone",
          title: "Plataforma Educativa",
          description:
            "Nuestra plataforma educativa permite al estudiante entregar sus tareas y visualizar sus calificaciones.",
        },
        {
          icon: "mdi-wifi",
          title: "Internet Educativo",
          description:
            "Contamos con internet educativo en todo nuestro establecimiento, los alumnos tienen acceso directo a los principales portales educativos y restringiendo el acceso a contenido no apto para ellos.",
        },
        {
          icon: "mdi-google",
          title: "Google Workspace for Education",
          description:
            "Cómo colegio comprometido con el futuro de nuestros jovenes ponemos a disposición de ellos cuentas de Google Workspace for Education lo cual le brinda acceso a poderosas herramientas de google asi como un correo institucional y acceso premium gratuito a sitios como Canva.",
        },
        {
          icon: "mdi-microsoft-office",
          title: "Microsoft Office 365 A1",
          description:
            "Brindamos a nuestros estudiantes acceso a los servicios web de microsoft asi como una licencia de Office 365 en su categoria A1 para su uso en la Web.",
        },
      ],
    };
  },
};
</script>
