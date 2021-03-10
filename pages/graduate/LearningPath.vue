<template>
  <div v-if="coursesArr && assessmentsArr">
    <Courses :coursesArr="coursesArr" :assessmentsArr="assessmentsArr" />
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