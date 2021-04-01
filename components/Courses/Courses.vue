<template>
  <div class="g-courses-wrapper">
    <div class="g-tables">
      <BaseButton
        :handleClick="toggleCourses"
        :value="!isCourse ? courseValue : assessmentValue"
      />

      <div class="g-tables-inner">
        <h3 class="text-gray-600 self-auto">
          {{ isCourse ? courseValue : assessmentValue }}
        </h3>
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
  props: {
    coursesArr: Array,
    assessmentsArr: Array,
  },
  data() {
    return {
      isCourse: true,
    };
  },
  components: {
    CoursesTable,
    BaseButton,
  },
  computed: {
    courseValue() {
      return this.$t("COURSES_VALUE");
    },
    assessmentValue() {
      return this.$t("ASSESSMENTS_VALUE");
    },
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