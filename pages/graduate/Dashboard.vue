<template>
  <section>
    <ScoresTable :scores="scores" />
    <div>
      <p>Total hours:{{ totalHours }}</p>
    </div>
  </section>
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