<template>
  <div>
    <v-sheet>
      <v-container>
        <div class="text-h4">Galeria</div>
      </v-container>
      <v-carousel
        height="445"
        cycle
        light
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        continuous
      >
        <v-carousel-item v-for="i in 9" :key="i">
          <v-sheet max-height="380" color="white">
            <v-img
              contain
              height="380"
              :lazy-src="require('@/assets/images/galeria/foto' + i + '.jpg')"
              max-height="500"
              :src="require('@/assets/images/galeria/foto' + i + '.jpg')"
            ></v-img>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
