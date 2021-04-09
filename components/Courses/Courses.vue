<template>
  <div class="g-courses-wrapper">
    <div class="g-tables">
      <LazyHydrate on-interaction="click">
        <BaseButton
          :handleClick="toggleCourses"
          :value="!isCourse ? courseValue : assessmentValue"
        />
      </LazyHydrate>

      <div class="g-tables-inner">
        <h3 class="text-gray-600 self-auto">
          {{ isCourse ? courseValue : assessmentValue }}
        </h3>
        <LazyHydrate never>
          <CoursesTable v-if="isCourse" :courses="coursesArr" />
        </LazyHydrate>

        <LazyHydrate never>
          <CoursesTable v-if="!isCourse" :courses="assessmentsArr" />
        </LazyHydrate>
      </div>
    </div>
  </div>
</template>

<script>
import CoursesTable from "./CoursesTable";
import BaseButton from "../../components/Style/BaseButton";
import LazyHydrate from "vue-lazy-hydration";

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
    LazyHydrate,
    CoursesTable: () => import("./CoursesTable"),
    BaseButton: () => import("../../components/Style/BaseButton"),
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