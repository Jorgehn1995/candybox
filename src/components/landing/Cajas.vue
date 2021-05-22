<template>
  <v-container id="pricing" class="pt-4 pt-md-8 pb-10">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3 mb-2">Selecciona Tu CandyBox</h2>
      <div class="text-h6 text-lg-h5">
        Todos nuestros dulces son seleccionados con los más altos estandares de
        calidad.
      </div>
    </v-responsive>

    <v-row class="mt-5">
      <v-col v-for="(plan, i) in plans" :key="i" cols="12" lg="4">
        <v-card class="text-body-1 pa-4 rounded-xl" outlined elevation="3">
          <div class="d-flex justify-space-between">
            <div class="mr-2">
              <div class="align-center">
                <div class="text-h4 font-weight-black">{{ plan.title }}</div>
                <br />
                <div v-if="plan.featured" class="">
                  <v-chip dark small color="primary" class="font-weight-black"
                    >Popular</v-chip
                  >
                </div>
              </div>
              <div class="mt-1">{{ plan.description }}</div>
            </div>
            <div class="text-right">
              <div class="d-flex align-center">
                <div class="text-h5 mr-1">Q</div>
                <div class="text-h3 text-number font-weight-bold">
                  {{ plan.price }}
                </div>
              </div>
              <div class="justify-end overline">/caja</div>
            </div>
          </div>

          <v-divider class="my-4"></v-divider>

          <div class="text-h6">
            <div
              v-for="(feat, j) in plan.features"
              :key="j"
              class="d-flex align-center justify-space-between my-1"
            >
              <div>
                <span v-if="feat.value" class="font-weight-black mr-1">{{
                  feat.value
                }}</span>
                <span class="text-truncate font-weight-regular">{{
                  feat.label
                }}</span>
              </div>
              <v-icon color="primary">mdi-check</v-icon>
            </div>
          </div>
          <v-divider class="my-4"></v-divider>
          <v-btn
            x-large
            block
            rounded
            :dark="plan.featured"
            :outlined="!plan.featured"
            :color="plan.featured ? 'primary' : ''"
            :to="'/pedir?caja='+plan.title"
          >
            Pedir
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12">
        <p>* Reparto a domicilio solo en el casco urbano de jutiapa <br /></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
