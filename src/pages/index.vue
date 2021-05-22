<template>
  <div>
    <v-app-bar flat height="80" style="position:absolute; z-index:2;" color="transparent" >
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none mr-2"
        >
          <img :src="require('@/assets/images/logo.png')" height="50" />
        </router-link>

        <v-spacer></v-spacer>

        <div class="d-none d-md-block">
          <v-btn
            class="mx-1"
            color="white"
            outlined
            to="/revisar"
          >
            Mis Pedidos
            <v-icon right>mdi-truck-delivery-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-sheet>
      <div class="imgbox">
        <v-img
          :src="require('@/static/images/fondo.jpg')"
          class="center-fit"
          gradient="to top right, rgba(0,0,0,.6), rgba(0,0,0,.6)"
        >
          <v-container class="py-6 pt-lg-15 text-center">
            <h1
              class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 mt-5 white--text"
            >
              <strong>Candy</strong>Box
            </h1>
            <h2
              class="text-h6 text-sm-h5 mt-4 w-full w-md-8-12 w-xl-half mx-auto white--text"
            >
              <span
                >Servicio a dominicio de cajas llenas de dulces, en el municipio
                de Jutiapa</span
              >
            </h2>
            <div class="mt-8">
              <v-btn
                x-large
                rounded
                color="primary "
                dark
                elevation="2"
                @click="$vuetify.goTo('#cajas')"
                class="my-1 mx-sm-1 w-full w-sm-auto"
              >
                Pedir una Caja
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-img>
      </div>
    </v-sheet>

    <Cajas id="cajas"></Cajas>
    <Mapa />
    <CallToAction />
  </div>
</template>

<script>
import Cajas from "../components/landing/Cajas.vue";
import Mapa from "../components/landing/Mapa.vue";

import CallToAction from "@/components/landing/CallToAction.vue";

export default {
  layout: "landing",
  components: {
    CallToAction,
    Mapa,
    Cajas,
  },
  mounted() {
    //this.createUser();
  },
  data: () => ({
    fundacion: 1973,
  }),
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          "foo@foo.foo",
          "contraseñatest123"
        );
      } catch (e) {
        handleError(e);
      }
    },
  },
  computed: {
    servicio: function () {
      let b = new Date();
      return parseInt(b.getFullYear()) - this.fundacion;
    },
  },
  head() {
    return {
      title: "Inicio",
    };
  },
};
</script>
<style  scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.center-fit {
  max-width: 100%;
  max-height: 100vh;
}
.imgbox {
  display: grid;
  height: 100%;
}
</style>
