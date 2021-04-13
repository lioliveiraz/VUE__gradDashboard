<template>
  <div class="g-dashboard">
    <section class="g-dashboard--top">
      <h1 class="g-color-adm-primary">{{ $t("welcome") }}, {{ getName }}!</h1>

      <img src="../../assets/adm_img.svg" alt="hi" />
    </section>
    <section class="g-adm-dashboard--middle">
      <div
        v-for="(grad, index) in grads"
        :key="index"
        class="g-adm-dashboard-card"
      >
        <nuxt-link :to="'gradscores/' + grad.empId">
            <BaseCard :graduated="grad" />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUsers } from "../../api/requests/get";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: "Dashboard",
    };
  },
  watchQuery: ["adm_dashboard"],
  layout: "dash_layout",
  component: {
    BaseCard: () => import("../../components/BaseCard"),
  },
  data() {
    return {
      grads: [],
    };
  },

  async created() {
    try {
      const res = await getUsers(this.getToken);
      this.grads = res;
    } catch (err) {
      this.$toast(this.toast_message, {
        type: this.TOAST_ERROR,
      });
    }
  },

  computed: {
    ...mapGetters("auth", ["getToken", "getName"]),
    toast_message() {
      return this.$t("TOAST_FAIL_MESSAGE");
    },
  },
  methods: {},
};
</script>

<style>
</style>