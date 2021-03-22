<template>
  <div class="employeeScore">
    <div class="w-3/4">
      <p class="text-blue-400 font-bold text-2xl">Employee: {{ empId }}</p>
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
      console.log(err);
    }
  },
};
</script>

<style>
.employeeScore {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.employeeScore div:first-child {
  height: 90%;
  overflow-y: scroll;
}
</style>