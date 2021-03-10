<template>
  <div class="main--graduate">
    <nav>
      <ul>
        <li><nuxt-link to="/adm/dashboard">home</nuxt-link></li>
        <li><nuxt-link to="/adm/updatepath">create employee</nuxt-link></li>
        <li>
          <nuxt-link to="/adm/updatepath">update learning path</nuxt-link>
        </li>
        <li><button @click="handleLogout">logout</button></li>
      </ul>
    </nav>
    <Nuxt />
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
