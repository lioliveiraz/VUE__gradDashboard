<template>
  <div class="g-courses-wrapper">
    <div class="g-tables">
<div class="flex">
     <button  @click="toggleCourses" :disabled="isCourse"  :class="
            !isCourse ? 'g-base-btn-blue mx-2 ' : 'g-base-btn-blue g-disabled mx-2'
          ">{{courseValue}}</button>

      <button  @click="toggleCourses" :disabled="!isCourse"  :class="
            isCourse ? 'g-base-btn-blue ' : 'g-base-btn-blue g-disabled'
          ">{{assessmentValue}}</button>
</div>
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