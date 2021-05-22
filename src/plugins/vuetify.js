import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#ffffff",
        secondary: "#ebbc38",
        anchor: "#8c9eff"
      }
    }
  }
});

export default vuetify;
