<template>
  <div class="employeeScore">
    <div class="w-3/4">
      <p class="employee-text">Employee: {{ empId }}</p>
      <div v-if="scoresArr">
        <ScoresTable :scores="scoresArr" />
      </div>
    </div>
  </div>
</template>

<script>
import { getScores } from "../../../api/requests/get";
import { mapGetters } from "vuex";
import ScoresTable from "../../../components/Scores/ScoresTable";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: `Employee: ${this.empId}`,
    };
  },
  components: {
    ScoresTable,
  },
  layout: "graduate",
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