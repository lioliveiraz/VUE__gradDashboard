<template>
  <div v-if="courses && assessmentsArr">
    <Courses :coursesArr="courses" :assessmentsArr="assessmentsArr" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Courses from "../../components/Courses/Courses";

export default {
  middleware: "courses",
  components: { Courses },
  layout: "admLayout",
  computed: {
    ...mapGetters("courses", ["courses", "assessmentsArr"]),
  },
};
</script>

<style>
</style>