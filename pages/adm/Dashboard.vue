<template>
  <div class="adm--dashboard mt-16 xl:mt-10 xl:p-3">
    <section class="font-extrabold adm--dashboard_top p-2">
      <h1 class="text-4xl text-green-400 md:text-6xl">Welcome {{ getName }}</h1>

      <img src="../../assets/adm_img.svg" alt="hi" />
    </section>
    <section class="w-full dashboard--cards">
      <div
        v-for="(grad, index) in grads"
        :key="index"
        class="m-3 md:m-1 w-3/4 md:w-5/12 xl:w-3/12 border-green-400 border-4 rounded shadow-lg lg:m-2"
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
.adm--dashboard_top {
  display: flex;
  min-height: 50vh;
  overflow: hidden;
  align-items: center;
  text-align: center;
}

.dashboard--cards {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.dashboard--cards div {
  min-height: 25vh;
  background: #00aaff;
}
@media screen and (min-width: 1000px) {
  .dashboard--cards {
    min-height: 80vh;
  }
  .dashboard--cards div {
    height: 50%;
  }
}
</style>