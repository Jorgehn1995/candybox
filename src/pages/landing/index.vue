<template>
  <div>
    <v-sheet>
      <v-carousel
        height="380"
        cycle
        hide-delimiters
        hide-delimiter-background
        continuous
      >
        <v-carousel-item v-for="i in 7" :key="i">
          <v-sheet max-height="380" color="white">
            <v-img
              contain
              height="380"
              :lazy-src="require('@/assets/images/slide' + i + '.png')"
              max-height="500"
              :src="require('@/assets/images/slide' + i + '.png')"
            ></v-img>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-container class="py-6 pt-lg-15 text-center">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">
          Educación de Excelencia desde
          <span class="primary--text">{{ fundacion }}</span>
        </h1>
        <h2 class="text-h6 text-sm-h5 mt-4 w-full w-md-8-12 w-xl-half mx-auto">
          {{ servicio }} años de historia y compromiso con la educación de
          nuestros estudiantes.
        </h2>
        <div class="mt-8">
          <v-btn
            x-large
            class="my-1 mx-sm-1 w-full w-sm-auto"
            @click="$vuetify.goTo('#vision')"
            color="primary"
            >Visión</v-btn
          >
          <v-btn
            x-large
            @click="$vuetify.goTo('#mision')"
            class="my-1 mx-sm-1 w-full w-sm-auto"
            >Misión</v-btn
          >
        </div>
      </v-container>
    </v-sheet>

    <Partners />
    <Ofrecemos id="ofrecemos"/>
    <Vision id="vision" />
    <Mision id="mision" />
    <Covid />


    <CallToAction />
  </div>
</template>

<script>
import Covid from "../../components/landing/Covid.vue";
import Mision from "../../components/landing/Mision.vue";
import Vision from "../../components/landing/Vision.vue";
import Ofrecemos from "../../components/landing/Ofrecemos.vue";
import Partners from "@/components/landing/Partners.vue";

import CallToAction from "@/components/landing/CallToAction.vue";

export default {
  layout: "landing",
  components: {
    Partners,
    CallToAction,
    Ofrecemos,
    Vision,
    Mision,
    Covid,
  },
  data: () => ({
    fundacion: 1973,
  }),
  computed: {
    servicio: function () {
      let b = new Date();
      return parseInt(b.getFullYear()) - this.fundacion;
    },
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
</style>
