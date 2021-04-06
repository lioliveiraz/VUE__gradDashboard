<template>
  <div class="g-dashboard">
    <section class="g-dashboard--top">
      <h1>Welcome {{ getName }}</h1>

      <img src="../../assets/adm_img.svg" alt="hi" />
    </section>
    <section class="g-adm-dashboard--middle">
      <div
        v-for="(grad, index) in grads"
        :key="index"
        class="g-adm-dashboard--middle--inner"
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
import BaseCard from "../../components/BaseCard";

export default {
  head() {
    return {
      title: "Welcome",
    };
  },
  watchQuery: ["adm_dashboard"],
  layout: "graduate",
  component: { BaseCard },
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
                   this.$toast("Something is wrong! Try again later", { type: "error" }) 

  
    }
  },

  computed: {
    ...mapGetters("auth", ["getToken", "getName"]),
  },
  methods: {},
};
</script>

<style>
</style>