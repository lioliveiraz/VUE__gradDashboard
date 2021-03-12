<template>
  <div class="graduate--dashboard">
    <h1 class="text-4xl text-teal-500 font-extrabold m-6 md:text-6xl">
      Welcome {{ getName }}
    </h1>

    <section class="w-full h-full">
      <div class="w-full md:h-64 md:w-5/6 score--table">
        <h2 class="text-gray-600 m-2 text-2xl">Your Score</h2>
        <ScoresTable :scores="getScores" />
      </div>
      <div class="w-5/6 m-3 md:h-64">
        <h2 class="text-gray-600 m-2 text-2xl">Your course time</h2>
        <ProgressBar :circle="circle" />
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
  head() {
    return {
      title: "Dashboard",
    };
  },
  components: {
    ScoresTable,
    ProgressBar,
  },
  data() {
    return {
      circle: {
        strokeColor: "#38b2ac",
        strokeWidth: "7",
        size: "150",
        text: 0,
      },
      courses: [],
    };
  },
  layout: "graduate",
  computed: {
    ...mapGetters("courses", ["getCourses", "getScores"]),
    ...mapGetters("auth", ["getName"]),
  },
  mounted() {
    this.calculateCourseHours();
  },

  methods: {
    calculateCourseHours() {
      this.circle.text = this.getCourses.reduce((acc, cur) => {
        return acc + +cur.duration;
      }, 0);
    },
  },
};
</script>

<style scoped>
.graduate--dashboard {
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.graduate--dashboard h1 {
  width: 65%;
  text-align: center;
}
.graduate--dashboard section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.graduate--dashboard section div:first-child {
  background: rgb(219, 219, 219);

  padding: 10px;
  overflow-y: scroll;
}
</style>