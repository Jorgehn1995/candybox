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
        <v-col cols="12" sm="6" offset-sm="3">
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
                  v-model="datos.telefono"
                  label="Número Telefonico"
                  :rules="[rules.general.requerido, rules.general.min8]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <div class="text-right">
                  <v-btn large color="blue" dark @click="realizarPedido">
                    Revisar
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12">
                <v-card>
                  <v-card-title> Pedido #1 </v-card-title>
                  <v-card-text>
                    <v-timeline align-top dense>
                      <v-timeline-item color="green lighten-4" small>
                        <v-row class="pt-1">
                          <v-col cols="3">
                            <strong>5pm</strong>
                          </v-col>
                          <v-col>
                            <strong>Ingreso del Pedido</strong>
                            <div class="caption">Se esta Confirmando el pedido</div>
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
    <v-dialog v-model="checkout" width="400">
      <v-card>
        <v-card-title> Confirmar Pedido </v-card-title>
        <v-card-text v-if="pedido[0]">
          <v-list dense>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-phone-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle>Teléfono</v-list-item-subtitle>
                <v-list-item-title>{{ datos.telefono }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle>Nombre</v-list-item-subtitle>
                <v-list-item-title>{{ datos.nombre }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-avatar>
                <v-icon>mdi-cart-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle>Caja Pedida</v-list-item-subtitle>
                <v-list-item-title>{{ pedido[0].title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pb-0">
              <v-list-item-content>Precio Caja:</v-list-item-content>
              <v-list-item-content class="align-end text-right">
                <span>Q {{ pedido[0].price }}</span>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="py-0">
              <v-list-item-content>Envio:</v-list-item-content>
              <v-list-item-content class="align-end text-right">
                <span>Q 0</span>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="pb-0 pt-0">
              <v-list-item-content>Total a Pagar:</v-list-item-content>
              <v-list-item-content class="align-end text-right">
                <strong>Q {{ pedido[0].price }}</strong>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <p class="mb-0">
            El monto a pagar se deberá cancelar al repartidos

            <br />
            Procederemos a confirmar tu pedido por medio de Whatsapp o Llamada
            Telefonica, si no logramos confirmar tu pedido en un periodo maximo
            de 2 horas procederemos a cancelar el pedido. Puedes verificar el
            estado de tu pedido en cualquier momento.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="checkout = false">
            <v-icon left>mdi-chevron-left</v-icon>
            Editar Pedido</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="confirmarPedido"
            >Confirmar Pedido <v-icon right>mdi-cube-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  mounted() {},
  data: () => ({
    pedido: [],
    plans: [
      {
        title: "Refa",
        price: "15",
        description: "Todas nuestras cajas Refa incluyen",
        features: [
          {
            value: "1 onza",
            label: "Gomitas",
          },
          {
            value: "1 onza",
            label: "Dulces",
          },
          {
            value: "2",
            label: "Paletas",
          },
          {
            value: "",
            label: "Reparto a Domicilio*",
          },
        ],
      },
      {
        title: "Personal",
        price: "20",
        description: "Todas nuestras cajas personales incluyen",
        featured: true,
        features: [
          {
            value: "2 onzas",
            label: "Gomitas",
          },
          {
            value: "2 onzas",
            label: "Dulces",
          },

          {
            value: "1 onza",
            label: "Dulces Acidos",
          },
          {
            value: "4",
            label: "Paletas",
          },
          {
            value: "",
            label: "Reparto a Domicilio*",
          },
        ],
      },
      {
        title: "Fiesta",
        price: "80",
        description: "Todas nuestras cajas Fiesta incluyen",
        features: [
          {
            value: "1/2 Libra",
            label: "Gomitas",
          },
          {
            value: "1/2 Libra",
            label: "Dulces",
          },

          {
            value: "1/4 Libra",
            label: "Dulces Acidos",
          },
          {
            value: "16",
            label: "Paletas",
          },
          {
            value: "",
            label: "Reparto a Domicilio*",
          },
          {
            value: "",
            label: "Caja CandyBox",
          },
        ],
      },
    ],
    datos: {
      telefono: "",
      nombre: "",
      direccion: "",
      instrucciones: "",
    },
    checkout: false,
    rules: rules,
  }),
  methods: {
    realizarPedido() {
      if (this.$refs.form.validate()) {
        this.checkout = true;
      }
    },
    async confirmarPedido() {
      try {
        await this.$fire.database.ref("pedidos").push(this.datos);
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
