<template>
  <div class="g-employee-score">
    <div class="g-employee-score--content">
      <p class="g-employee-text">Employee: {{ empId }}</p>
      <div v-if="scoresArr" class="g-employee-score-table">
        <LazyHydrate never>
          <ScoresTable :scores="scoresArr" />
        </LazyHydrate>
      </div>
      </div>
  </div>
</template>

<script>
import { getScores } from "../../../api/requests/get";
import { mapGetters } from "vuex";
import LazyHydrate from "vue-lazy-hydration";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: `Employee: ${this.empId}`,
    };
  },
  components: {
    LazyHydrate,
    ScoresTable: () => import("../../../components/Scores/ScoresTable"),
  },
  layout: "dash_layout",
  data() {
    return {
      empId: this.$route.params.id,
      scoresArr: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  async created() {
    try {
      const res = await getScores(this.empId, this.getToken);
      this.scoresArr = res.scores;
    } catch (err) {
      this.$toast("Something went wrong! Try again latter", {
        type: this.TOAST_ERROR,
      });
    }
  },
};
</script>

<style>
</style>