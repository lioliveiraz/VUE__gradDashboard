<template>
  <div class="g-layout--wrapper">
    <div class="g-container">
      <TheNav :links="isAdm ? links_adm : links_grad" :username="getName" />

      <div class="g-container--inner">
        <Nuxt />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "vue-toastification";
import global from "../mixin/global";
import TheNav from "../components/Nav/TheNav";
import TheFooter from "../components/Footer/TheFooter";
import { mapGetters } from "vuex";
import {isUserAdm} from "../helpers/service"
Vue.mixin(global);

Vue.use(Toast, {
  position: "top-right",
  newestOnTop: true,
  maxToasts: 3,
  pauseOnHover: true,
});
export default {
  components: { TheNav, TheFooter },
  middleware: "courses",

  data() {
    return {
      links_grad: [
        {
          path: "dashboard",
          name: "home",
        },
        {
          path: "learningpath",
          name: "courses",
        },
        {
          path: "scores",
          name: "scores",
        },
      ],
      links_adm: [
        {
          path: "/adm/dashboard",
          name: "home",
        },
        {
          path: "/adm/registeremployee",
          name: "new employee",
        },
        {
          path: "/adm/updatepath",
          name: "new course",
        },
      ],
      displayADMLinks: this.isAdm,
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken", "getName"]),
    isAdm(){
      return isUserAdm(this.getToken)
    }
  },
};
</script>
<style >
@import "../assets/styles/styles.css";
@import "../assets/styles/tables.css";
@import "../assets/styles/colors.css";
@import "../assets/styles/typography.css";
@import "../assets/styles/forms.css";
@import "../assets/styles/dashboard.css";
</style>
