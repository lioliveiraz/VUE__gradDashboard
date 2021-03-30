<template>
  <div class="g-courses-wrapper">
    <div class="g-tables">
      <BaseButton
        :handleClick="toggleCourses"
        :value="!isCourse ? 'courses' : 'assessmentes'"
      />
      <h3 class="text-gray-600">
        {{ isCourse ? "Courses" : "Assessments" }}
      </h3>
      <div class="g-tables-inner">
        <CoursesTable v-if="isCourse" :courses="coursesArr" />

        <CoursesTable v-if="!isCourse" :courses="assessmentsArr" />
      </div>
    </div>
  </div>
</template>

<script>
import CoursesTable from "./CoursesTable";
import BaseButton from "../../components/Style/BaseButton";

export default {
  data() {
    return {
      isCourse: false,
    };
  },
  components: {
    CoursesTable,
    BaseButton,
  },
  props: {
    coursesArr: Array,
    assessmentsArr: Array,
  },
  methods: {
    toggleCourses() {
      this.isCourse = !this.isCourse;
    },
  },
};
</script>

<style scoped>
</style>