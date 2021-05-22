<template>
  <v-container class="py-4">
    <v-row>
      <v-col cols="12">
        <h3>
          Debido a la pandemia <strong>COVID-19</strong> hemos adoptado las
          siguientes medidas
        </h3>
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
          icon: "mdi-thermometer-low",
          title: "Medición de Temperatura",
          description: "Se toma la temperatura al ingreso al establecimiento",
        },
        {
          icon: "mdi-spray-bottle",
          title: "Gel Desinfectante",
          description:
            "Aplicación de ges desinfectante al ingreso y dentro del establecimiento",
        },
        {
          icon: "mdi-face-mask",
          title: "Mascarilla Obligatoria",
          description:
            "Uso de mascarilla es obligatorio para cualquier persona al interior del establecimiento",
        },

        {
          icon: "mdi-social-distance-6-feet",
          title: "Distanciamiento Social",
          description:
            "Se redujo el aforo de los salones de clases lo máximo posible para tener un distanciamiento social apropiado de acuerdo al semáforo del MSPAS",
        },
        {
          icon: "mdi-google-classroom",
          title: "Clases Virtuales",
          description:
            "Se realizan clases virtuales a nuestros estudiantes con apoyo de nuestra plataforma web.",
        },
      ],
    };
  },
};
</script>
