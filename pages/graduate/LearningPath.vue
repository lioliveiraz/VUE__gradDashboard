<template>
  <div v-if="courses && assessments" class="">
    <Courses :coursesArr="courses" :assessmentsArr="assessments" />
  </div>
</template>

<script>
import Courses from "../../components/Courses/Courses";
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: "Courses",
    };
  },
  layout: "graduate",
  components: { Courses },
  middleware: "courses",
  data() {
    return {
      isCourse: true,
    };
  },
  async created() {},
  computed: {
    ...mapState("courses", ["courses", "assessments"]),
  },
};
</script>

<style>
</style>