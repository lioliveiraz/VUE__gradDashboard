<template>
  <div>
    <section>
      <h1>Welcome {{ name }}</h1>
    </section>
    <section>
      <div>
        <ScoresTable :scores="scores" />
      </div>
      <div></div>
    </section>
  </div>
</template>

<script>
import ScoresTable from "../../components/Scores/ScoresTable";

import { mapGetters } from "vuex";
export default {
  watchQuery: ["dashboard"],
  layout: "graduate",
  components: {
    ScoresTable,
  },
  data() {
    return {
      totalHours: 0,
    };
  },
  layout: "graduate",
  computed: {
    ...mapGetters("courses", ["courses", "scores"]),
    ...mapGetters("auth", ["name"]),
  },
  mounted() {
    this.calculateCourseHours();
  },
  methods: {
    calculateCourseHours() {
      this.totalHours = this.courses.reduce((acc, cur) => {
        return acc + cur.duration;
      }, 0);
    },
  },
};
</script>

<style>
</style>