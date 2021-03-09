<template>
  <div v-if="courses && assessmentsArr">
    <Courses :coursesArr="courses" :assessmentsArr="assessmentsArr" />
  </div>
</template>

<script>
import Courses from "../../components/Courses/Courses";
import { mapState } from "vuex";

export default {
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
    ...mapState("courses", ["coursesArr", "assessmentsArr"]),
  },
};
</script>

<style>
</style>