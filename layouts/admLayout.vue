<template>
  <div class="main--graduate flex">
    <nav class="bg-gray-900 w-4/12 h-full text-gray-200 p-1">
      <ul class="md:text-2xl w-4/5">
        <li class="m-1">
          <div
            class="bg-gray-800 rounded-full md:w-40 md:h-40 imageCenter border-teal-600 border-4 object-cover"
          >
            <img src="../assets/logo.svg" alt="logo" id="logo" />
          </div>
        </li>
        <li class="m-1">
          <nuxt-link to="/adm/dashboard">home</nuxt-link>
        </li>
        <li class="m-1">
          <nuxt-link to="/adm/registeremployee">Register employee</nuxt-link>
        </li>
        <li class="m-1">
          <nuxt-link to="/adm/updatepath">Register course</nuxt-link>
        </li>
        <button
          class="md:border-orange-500 md:shadow-outline logout md:text-2xl p-2"
          @click="handleLogout"
        >
          Logout
        </button>
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

Vue.use(Toast, {
  position: "top-right",
  newestOnTop: true,
  maxToasts: 3,
  pauseOnHover: true,
});
export default {
  methods: {
    ...mapActions("auth", ["actionLogout"]),

    handleLogout() {
      this.actionLogout();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
</style>
