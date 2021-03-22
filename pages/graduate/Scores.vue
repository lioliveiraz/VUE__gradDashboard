<template>
  <div class="scores--main mt-10">
    <div class="scores--container">
      <div class="w-full scores_form">
        <h3 class="text-gray-600 m-2 text-2xl">Add new Score</h3>
        <AddNewScoreForm />
      </div>
      <div class="w-full">
        <h3 class="text-gray-600 m-2 text-2xl">Your scores</h3>
        <ScoresTable :scores="scores" />
      </div>
    </div>
  </div>
</template>

<script>
import ScoresTable from "../../components/Scores/ScoresTable";
import AddNewScoreForm from "../../components/Scores/AddNewScoreForm";
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: "Scores",
    };
  },
  name: "gaduateScores",
  layout: "graduate",
  components: { ScoresTable, AddNewScoreForm },

  computed: {
    ...mapState("courses", ["scores"]),
  },
};
</script>

<style>
.scores--main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}
.scores--container {
  height: 90%;
}
.scores--container div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 700px) {
  .scores--container {
    width: 70%;
    height: 85%;
  }
  .scores--container div:first-child {
    width: 50%;
  }
}
</style>