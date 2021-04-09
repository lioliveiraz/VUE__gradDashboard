<template>
  <div class="g-scores" data-testId="score_component">
    <div class="g-scores--container">
      <section class="g-scores--form">
        <h3 data-testId="score_form-title">{{ $t("ADD_NEW_SCORE") }}</h3>
        <LazyHydrate on-interaction>
          <AddNewScoreForm />
        </LazyHydrate>
      </section>

      <section class="g-scores--table">
        <h3 data-testId="score_form-table">{{ $t("YOUR_SCORE") }}</h3>
        <div class="g-scores--table--inner">
          <LazyHydrate never>
            <ScoresTable :scores="scores" />
          </LazyHydrate>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LazyHydrate from "vue-lazy-hydration";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: "Scores",
    };
  },
  name: "gaduateScores",
  layout: "graduate",
  components: {
    LazyHydrate,
    ScoresTable: () => import("../../components/Scores/ScoresTable"),
    AddNewScoreForm: () => import("../../components/Scores/AddNewScoreForm"),
  },

  computed: {
    ...mapState("courses", ["scores"]),
  },
};
</script>

<style>
</style>