<template>
  <div class="adm--dashboard">
    <h1 class="text-4xl text-teal-500 font-extrabold m-6 md:text-6xl">
      Welcome {{ getName }}
    </h1>
    <section class="w-full dashboard--cards">
      <div
        v-for="(grad, index) in grads"
        :key="index"
        class="w-full md:w-1/2 lg:w-1/3 border-blue-200 border-4 rounded bg-gray-700 shadow-lg lg:m-2"
      >
        <nuxt-link :to="'gradscores/' + grad.empId">
          <Card :graduated="grad" />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUsers } from "../../api/requests/get";
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
      const res = await getUsers(this.getToken);
      this.grads = res;
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters("auth", ["getToken", "getName"]),
  },
  methods: {},
};
</script>

<style>
.adm--dashboard {
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dashboard--cards {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.dashboard--cards div {
  height: 50%;
}
</style>