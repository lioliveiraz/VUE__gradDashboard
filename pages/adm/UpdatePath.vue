<template>
  <div :key="key">
    <div v-if="courses && assessmentsArr">
      <Courses :coursesArr="courses" :assessmentsArr="assessmentsArr" />
    </div>
    <CourseForm :changeKey="handleChangeKey" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Courses from "../../components/Courses/Courses";
import CourseForm from "../../components/Courses/Form";

export default {
  middleware: "courses",
  components: { Courses, CourseForm },
  layout: "admLayout",
  data() {
    return {
      key: 1,
    };
  },
  computed: {
    ...mapGetters("courses", ["courses", "assessmentsArr"]),
  },
  methods: {
    handleChangeKey() {
      this.key++;
    },
  },
};
</script>

<style>
</style>