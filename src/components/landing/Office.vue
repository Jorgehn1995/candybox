<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" lg="6">
          <v-img
            contain
            :src="require('@/assets/images/office2.jpg')"
            class="elevation-6"
            max-height="300"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <div
            class="text-uppercase font-weight-bold body-2 primary--text mb-2 mt-0 mt-xl-10"
          >
            Almacenamiento OneDrive Ilimitado y Office Web/Móvil
          </div>
          <h2 class="text-h3">Office 365 A1</h2>
          <div class="text-h6 text-lg-h5 mt-5">
            Como un colegio con visión a futuro se les otorga a nuestros
            estudiantes sin costo alguno una licencia de Office 365 A1 el cual
            le da acceso a los servicios de Microsoft Office como Word, Excel,
            PowerPoint, Teams, Sway, entre otros. En sus versiones para Web y en
            dispositivos móviles asi
            <v-btn color="blue" target="_blank" text href="https://portal.office.com"
              >Acceder a Office</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
