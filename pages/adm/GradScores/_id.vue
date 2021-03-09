<template>
  <div>
    <h1>{{ empId }}</h1>
    <div v-if="scoresArr">
      <ScoresTable :scores="scoresArr" />
    </div>
  </div>
</template>

<script>
import { getScores } from "../../../api/requests";
import { mapGetters } from "vuex";
import ScoresTable from "../../../components/Scores/ScoresTable";

export default {
  components: {
    ScoresTable,
  },
  layout: "admLayout",
  data() {
    return {
      empId: this.$route.params.id,
      scoresArr: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["token"]),
  },
  async created() {
    try {
      const res = await getScores(this.empId, this.token);
      this.scoresArr = res.scores;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
</style>