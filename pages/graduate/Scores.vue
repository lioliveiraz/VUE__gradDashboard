<template>
  <div class="scores--main mt-10">
    <div class="scores--container">
      <div class="w-full scores_form">
        <h3 class="text-gray-600 m-2 text-2xl">Add new Score</h3>
        <Form
          :scores="scores"
          :courses="courses"
          :assessments="assessments"
          :handleKey="handleKey"
        />
      </div>
      <div class="w-full" :key="key">
        <h3 class="text-gray-600 m-2 text-2xl">Your scores</h3>
        <ScoresTable :scores="scores" />
      </div>
    </div>
  </div>
</template>

<script>
import ScoresTable from "../../components/Scores/ScoresTable";
import Form from "../../components/Scores/Form";
import { mapState } from "vuex";

export default {
  name: "gaduateScores",
  layout: "graduate",
  components: { ScoresTable, Form },
  data() {
    return {
      key: 0,
    };
  },
  computed: {
    ...mapState("courses", ["courses", "assessments", "scores"]),
  },
  methods: {
    handleKey() {
      this.key++;
    },
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