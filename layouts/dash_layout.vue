<template>
  <div :class="isAdm? 'g-layout--wrapper-adm':'g-layout--wrapper'">
    <div class="g-container">
        <header class="g-header-wrapper">
      <div
        @click="toggleMenu"
        :class="isMenu ? 'g-menu close ' : 'g-menu open '"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

        <h2 class="g-nav-logo">GRAP</h2>
      <a
        href="#"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
      >
        <button class="g-language-toggle">{{ locale.name }}</button>
      </a>
    </header>
    <div class="g-inner-container">
      <TheNav :toggleMenu="toggleMenu" :links="isAdm ? links_adm : links_grads" :username="getName"  :isMenu="isMenu"/>
      <Nuxt />
  </div>
      <TheFooter />

    </div>
        </div>


</template>

<script>
import Vue from "vue";
import Toast from "vue-toastification";
import global from "../mixin/global";

import { mapGetters } from "vuex";
import { isUserAdm } from "../helpers/service";
Vue.mixin(global);

Vue.use(Toast, {
  position: "top-right",
  newestOnTop: true,
  maxToasts: 3,
  pauseOnHover: true
});
export default {
  components: { TheNav:()=>import("../components/Nav/TheNav"), TheFooter:()=>import("../components/Footer/TheFooter") },
  middleware: "courses",

  data() {
    return {
      displayADMLinks: this.isAdm,
      THEname: "",
      displayADMLinks: this.isAdm,
      isMenu: false,

    };
  },

  computed: {
    ...mapGetters("auth", ["getToken", "getName"]),
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },

    isAdm() {
      return isUserAdm(this.getToken);
    },

    links_grads() {
      return [
        {
          path: "dashboard",
          name: this.$t("PATH_NAME_HOME")
        },
        {
          path: "learningpath",
          name: this.$t("PATH_NAME_COURSES")
        },
        {
          path: "scores",
          name: this.$t("PATH_NAME_SCORE")
        }
      ];
    },
    links_adm() {
      return [
        {
          path: "/adm/dashboard",
          name: this.$t("PATH_NAME_HOME")
        },
        {
          path: "/adm/registeremployee",
          name: this.$t("PATH_NAME_NEW_EMPLOYEE")
        },
        {
          path: "/adm/updatepath",
          name: this.$t("PATH_NAME_NEW_COURSE")
        }
      ];
    }
  },
  methods:{
    toggleMenu(){
      this.isMenu=!this.isMenu
    }
  }
};
</script>
<style>
@import "../assets/styles/global.css";

@import "../assets/styles/styles.css";
@import "../assets/styles/tables.css";
@import "../assets/styles/colors.css";
@import "../assets/styles/typography.css";
@import "../assets/styles/forms.css";
@import "../assets/styles/dashboard.css";
@import "../assets/styles/buttons.css";
</style>
