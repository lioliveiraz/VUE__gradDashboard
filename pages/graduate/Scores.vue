<template>
  <div class="g-scores" data-testId="score_component">
    <div class="g-scores--container">
      <section class="g-scores--form">
        <h3 data-testId="score_form-title">{{ $t("ADD_NEW_SCORE") }}</h3>
        <AddNewScoreForm />
      </section>

      <section class="g-scores--table">
        <h3 data-testId="score_form-table">{{ $t("YOUR_SCORE") }}</h3>
        <div class="g-scores--table--inner">
          <ScoresTable :scores="scores" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ScoresTable from "../../components/Scores/ScoresTable";
import AddNewScoreForm from "../../components/Scores/AddNewScoreForm";
import { mapState } from "vuex";

export default {
  nuxtI18n: false,

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