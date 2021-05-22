<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" lg="6">
          <div
            class="text-uppercase font-weight-bold body-2 primary--text mb-2 mt-0 mt-xl-10"
          >
            Correo Electronico Institucional y Almacenamiento Ilimitado
          </div>
          <h2 class="text-h3">Google Workspace for Education</h2>
          <div class="text-h6 text-lg-h5 mt-2">
           INEBCO ofrece a todos sus estudiantes un correo electrónico institucional con el que obtiene acceso a todas las herramientas que ofrece Google Workspace como almacenamiento en la nube ilimitado y acceso a la versión premium de Canva.com
          <v-btn href="http://correo.inebco.edu.gt" color="green" dark text>Acceder a mi Cuenta</v-btn>
          </div>

        </v-col>
        <v-col cols="12" lg="6">
          <v-img
            :src="require('@/assets/images/google.jpg')"
            class="elevation-6"
            max-height="500"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
