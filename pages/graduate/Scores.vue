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
</style>