<template>
  <div>
    <section>
      <h1>Welcome {{ name }}</h1>
    </section>
    <section>
      <div>
        <ProgressBar :circle="circle" />
      </div>
      <div>
        <ScoresTable :scores="scores" />
      </div>
    </section>
  </div>
</template>

<script>
import ScoresTable from "../../components/Scores/ScoresTable";
import ProgressBar from "../../components/ProgressBar";

import { mapGetters } from "vuex";
export default {
  watchQuery: ["dashboard"],
  layout: "graduate",
  components: {
    ScoresTable,
    ProgressBar,
  },
  data() {
    return {
      circle: {
        strokeColor: "#428bca",
        strokeWidth: "10",
        size: "250",
        text: 0,
      },
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
      this.circle.text = this.courses.reduce((acc, cur) => {
        return acc + cur.duration;
      }, 0);
    },
  },
};
</script>

<style>
</style>