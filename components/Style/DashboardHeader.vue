<template>
  <section class="g-dashboard--top">
    <h1>{{ $t("welcome") }}, {{ getName }}!</h1>

    <img src="../../assets/hi.svg" alt="hi" />
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name:"DashboardHeader",
  computed: {
    ...mapGetters("auth", ["getName"]),
  },
};
</script>
