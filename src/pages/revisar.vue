<template>
  <div>
    <v-app-bar flat height="80" color="blue">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none mr-2"
        >
          <img :src="require('@/assets/images/logo.png')" height="50" />
        </router-link>

        <v-spacer></v-spacer>

        <div class="d-none d-md-block">
          <v-btn class="mx-1" color="white" outlined to="/">
            Inicio
            <v-icon right>mdi-home-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-container id="pricing" class="pt-0 pb-10">
      <v-row class="mt-5">
        <v-col cols="12" sm="8" md="6"  offset-sm="2" offset-md="3">
          <v-responsive max-width="1200" class="mx-auto text-center mb-2">
            <h2 class="text-h3 mb-2">Mis Pedidos</h2>
            <div class="text-h6 text-lg-h5">
              Ingresa el número telefonico con el que realizaste tu pedido
            </div>
          </v-responsive>
          <v-form lazy-validation ref="form">
            <v-row dense>
              <v-col cols="12" md="12" class="pb-0">
                <v-text-field
                  filled
                  v-model="telefono"
                  label="Número Telefonico"
                  :rules="[rules.general.requerido, rules.general.min8]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <div class="text-right">
                  <v-btn large color="blue" dark @click="buscarPedidos">
                    Revisar
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12">
                <v-card class="mb-2" v-for="(pedido, i) in pedidos" :key="i">
                  <v-card-title> Pedido #{{ i + 1 }} </v-card-title>
                  <v-card-text>
                    <v-timeline align-top dense>
                      <v-timeline-item color="green lighten-4" small>
                        <v-row class="pt-1">
                          <v-col cols="6">
                            <strong>{{pedido.ingresado.hora}}</strong>
                          </v-col>
                          <v-col>
                            <strong>Ingreso del Pedido</strong>
                            <div class="caption">
                              Se esta Confirmando el pedido
                            </div>
                          </v-col>
                        </v-row>
                      </v-timeline-item>
                    </v-timeline>

                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <CallToAction />
  </div>
</template>

<script>
import Cajas from "../components/landing/Cajas.vue";
import Mapa from "../components/landing/Mapa.vue";

import CallToAction from "@/components/landing/CallToAction.vue";
import rules from "@/configs/rules";
export default {
  layout: "landing",
  components: {
    CallToAction,
    Mapa,
    Cajas,
  },
  mounted() {
    let telefono = this.$route.query.telefono;
    if (!telefono) {
      //this.$router.go(-1);
    } else {
      this.telefono = telefono;
      this.buscarPedidos();
    }
  },
  data: () => ({
    pedidos: [],
    telefono: "",
    checkout: false,
    rules: rules,
  }),
  methods: {
    async buscarPedidos() {
      try {
        this.pedidos=[];
        let pedidos = this.$fire.database.ref("pedidos");
        pedidos
          .orderByChild("telefono")
          .equalTo(this.telefono)
          .on("value", (snapshot) => {
            let key = Object.keys(snapshot.val());
            let dato = snapshot.val();
            this.pedidos.push(dato[key]);
          });
      } catch (e) {
        console.log(e);
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
      title: "Realizar Pedido",
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
