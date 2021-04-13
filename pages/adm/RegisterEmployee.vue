<template>
  <div class="g-register">
    <div class="g-register--form">
      <LazyHydrate on-interaction>
        <RegisterEmployeeForm />
      </LazyHydrate>
    </div>
    <img src="../../assets/sittingMan.svg" alt="man sitting" />
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: "Register employee",
    };
  },
  components: {
    LazyHydrate,
    RegisterEmployeeForm: () =>
      import("../../components/Register/RegisterEmployeeForm"),
  },
  layout: "dash_layout",
};
</script>

<style scoped>
</style>