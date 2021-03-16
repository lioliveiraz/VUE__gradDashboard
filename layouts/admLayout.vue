<template>
  <div class="main--graduate flex">
    <div
      @click="isMenu = !isMenu"
      :class="isMenu ? 'menu close m-1 md:m-5' : 'menu open m-1 md:m-5'"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav
      :class="
        +isMenu
          ? ' nav_open w-8/12 md:w-1/3 h-full text-black p-1 lg:p-3 xl:w-3/12'
          : ' nav_close w-0 h-full text-black'
      "
    >
      <ul class="text-2xl w-4/5 md:text-4xl lg:text-5xl xl:text-3xl m-1">
        <li class="p-1">
          <div
            class="bg-gray-800 rounded-full w-40 h-40 lg:w-64 lg:h-64 xl:w-48 xl:h-48 imageCenter border-4 object-cover"
          >
            <img
              src="../assets/profile.jpg"
              :alt="this.LOGO_IMAGE"
              :id="this.LOGO_IMAGE"
            />
          </div>
        </li>
        <li class="p-1">
          <nuxt-link to="/adm/dashboard">
            {{ this.LINK_HOME_ENGLISH }}</nuxt-link
          >
        </li>
        <li class="p-1">
          <nuxt-link to="/adm/registeremployee">{{
            this.LINK_REGISTER_EMPLOYEE_ENGLISH
          }}</nuxt-link>
        </li>
        <li class="p-1">
          <nuxt-link to="/adm/updatepath">{{
            this.LINK_REGISTER_COURSE_ENGLISH
          }}</nuxt-link>
        </li>
        <li class="p-1 mt-12">
          <button
            class="logout text-base md:text-2xl p-2 rounded-lg xl:text-2xl"
            @click="handlelogout"
          >
            {{ this.LOGOUT_BUTTON }}
          </button>
        </li>
      </ul>
    </nav>

    <div class="bg-gray-200 w-full graduate--content h-full">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Vue from "vue";
import Toast from "vue-toastification";
import global from "../mixin/global";

Vue.mixin(global);

Vue.use(Toast, {
  position: "top-right",
  newestOnTop: true,
  maxToasts: 3,
  pauseOnHover: true,
});
export default {
  data() {
    return {
      isMenu: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),

    handlelogout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
</style>
