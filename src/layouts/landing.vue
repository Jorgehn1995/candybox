<template>
  <v-app>
    <v-app-bar flat height="80" fixed hide-on-scroll  color="transparent">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none mr-2"
        >
          <img :src="require('@/assets/images/logo.png')" height="50" />
        </router-link>

        <v-spacer></v-spacer>

        <div class="d-none d-md-block">
          <v-btn class="mx-1" color="white" outlined @click="$vuetify.goTo('#ofrecemos')">
            Rastrear Mi Pedido
            <v-icon right>mdi-truck-delivery-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <nuxt />

      <v-footer color="transparent">
        <v-container class="py-5">
          <v-row>
            <v-col cols="12" md="4">
              <div class="text-h6 text-lg-h5 font-weight-bold">Navegacion</div>
              <div style="width: 80px; height: 2px" class="mb-5 mt-1 primary" />
              <div class="d-flex flex-wrap">
                <div
                  v-for="(link, i) in links"
                  :key="i"
                  class="w-half body-1 mb-1"
                >
                  <router-link
                    v-if="link.to"
                    class="text-decoration-none text--primary"
                    :to="link.to"
                    >{{ link.label }}</router-link
                  >
                  <a
                    v-else
                    class="text-decoration-none text--primary"
                    :href="link.href"
                    :target="link.target || 'blank'"
                    >{{ link.label }}</a
                  >
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
                Barrio el Centro, San Luis Jilotepeque, Jalapa 21003 Guatemala
              </div>
              <div class="d-flex mb-2">
                <v-icon color="primary lighten-1" class="mr-2"
                  >mdi-phone-outline</v-icon
                >
                <a href="#" class="text-decoration-none text--primary"
                  >+502 7923 7614</a
                >
              </div>
              <div class="d-flex mb-2">
                <v-icon color="primary lighten-1" class="mr-2"
                  >mdi-email-outline</v-icon
                >
                <a href="#" class="text-decoration-none text--primary"
                  >imebsanluisjilotepeque@gmail.com</a
                >
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="text-h6 text-lg-h5 font-weight-bold">Noticias</div>
              <div style="width: 80px; height: 2px" class="mb-5 mt-1 primary" />
              <div class="d-flex flex-column flex-lg-row w-full">
                <v-text-field
                  outlined
                  solo
                  label="Your email"
                  dense
                  height="44"
                  class="mr-lg-2"
                ></v-text-field>
                <v-btn large color="primary">Suscribete</v-btn>
              </div>
              <div class="text-center text-md-right mt-4 mt-lg-2">
                Conectate
                <v-btn
                  fab
                  small
                  color="primary"
                  target="_blank"
                  href="https://www.facebook.com/inebcosl"
                  class="ml-2"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  fab
                  small
                  color="primary"
                  target="_blank"
                  href="https://www.instagram.com/inebcosl"
                  class="ml-2"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-3"></v-divider>
          <div class="text-center caption">
            © INEBCO 2021, Todos los derechos reservados | Created by Jorge
            Hernández
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
