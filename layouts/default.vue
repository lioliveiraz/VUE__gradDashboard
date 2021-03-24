<template>
  <div class="homePage__main">
    <div class="backDrop">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import "vue-toastification/dist/index.css";
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
export default {};
</script>

<style >
@import "../assets/styles/styles.css";
@import "../assets/styles/colors.css";
@import "../assets/styles/colors.css";
@import "../assets/styles/typography.css";
@import "../assets/styles/forms.css";
</style>
