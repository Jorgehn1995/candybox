<template>
  <v-app>
    <v-main>
      <nuxt />

      <v-footer color="transparent">
        <v-container class="py-5">
          <v-row>
            <v-col cols="12" md="4">
              <div class="text-h6 text-lg-h5 font-weight-bold">Navegacion</div>
              <div style="width: 80px; height: 2px" class="mb-5 mt-1 primary" />
              <div class="d-flex flex-wrap">
                <div class="w-half body-1 mb-1">
                  <router-link
                    class="text-decoration-none text--primary"
                    to="/"
                  >
                    Inicio
                  </router-link>
                  <br>
                  <router-link
                    class="text-decoration-none text--primary"
                    to="/revisar"
                  >
                    Revisar pedido
                  </router-link>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="text-h6 text-lg-h5 font-weight-bold">Contacto</div>
              <div style="width: 80px; height: 2px" class="mb-5 mt-1 primary" />
              <div class="d-flex mb-2 font-weight-bold">
                <v-icon color="primary lighten-1" class="mr-2"
                  >mdi-map-marker-outline</v-icon
                >
                Barrio el centro Jutiapa, Jutiapa. Guatemala 01001
              </div>
              <div class="d-flex mb-2">
                <v-icon color="primary lighten-1" class="mr-2"
                  >mdi-phone-outline</v-icon
                >
                <a href="#" class="text-decoration-none text--primary"
                  >+502 1234 56789</a
                >
              </div>
              <div class="d-flex mb-2">
                <v-icon color="primary lighten-1" class="mr-2"
                  >mdi-email-outline</v-icon
                >
                <a href="#" class="text-decoration-none text--primary"
                  >contacto@candybox.com.gt</a
                >
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="text-h6 text-lg-h5 font-weight-bold">Escribemos</div>
              <div style="width: 80px; height: 2px" class="mb-5 mt-1 primary" />
              <div class="d-flex flex-column flex-lg-row w-full">
                <v-text-field
                  outlined
                  solo
                  label="Tu Mensaje"
                  dense
                  height="44"
                  class="mr-lg-2"
                ></v-text-field>
                <v-btn large color="primary">Enviar Mensaje</v-btn>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-3"></v-divider>
          <div class="text-center caption">
            © CANDYBOX JUTIAPA 2021, Todos los derechos reservados | Creado como
            Proyecto para UMG
          </div>
        </v-container>
      </v-footer>
    </v-main>
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-title> Lo sentimos </v-card-title>
        <v-card-text>
          <p>Debes estar conectado a la Red INEBCO para acceder</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn block color="grey" @click="dialog = false" text>Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import config from "@/configs";

export default {
  data() {
    return {
      config,
      dialog: false,
      links: [
        {
          label: "Inicio",
          to: "#",
        },
        {
          label: "Propuesta Educativa",
          to: "#ofrecemos",
        },
        {
          label: "Visión",
          to: "#vision",
        },
        {
          label: "Misión",
          to: "#mision",
        },
        {
          label: "Plataforma Educativa",
          to: "https://www.lerniz.com",
        },
      ],
    };
  },
  methods: {
    revisarWifi() {
      window.open("http://192.168.2.1/login");
    },
  },
};
</script>
