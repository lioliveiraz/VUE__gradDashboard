<template>
  <div>
    <h1>ADM DASH</h1>
    <section>
      <div v-for="(grad, index) in grads" :key="index">
        <nuxt-link :to="'gradscores/' + grad.empId">
          <Card :graduated="grad" />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUsers } from "../../api/requests";
import Card from "../../components/Card";

export default {
  watchQuery: ["adm_dashboard"],
  layout: "admLayout",
  component: { Card },
  data() {
    return {
      grads: [],
    };
  },
  async created() {
    try {
      const res = await getUsers(this.token);
      this.grads = res;
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters("auth", ["token"]),
  },
  methods: {},
};
</script>

<style>
</style>