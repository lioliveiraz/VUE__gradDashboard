<template>
  <div v-if="courses && assessments" class="g-learning-path">
    <div class="g-learning-path-table">
    <LazyHydrate when-idle>
      <Courses :courses-arr="courses" :assessments-arr="assessments" />
    </LazyHydrate>
  </div>
  </div>
</template>

<script>
import Courses from "../../components/Courses/Courses";
import { mapState } from "vuex";
import LazyHydrate from "vue-lazy-hydration";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: "Courses",
    };
  },
  layout: "dash_layout",
  components: {
    LazyHydrate,
    Courses: () => import("../../components/Courses/Courses"),
  },
  middleware: "courses",
  data() {
    return {
      isCourse: true,
    };
  },

  computed: {
    ...mapState("courses", ["courses", "assessments"]),
  },
};
</script>

<style>
</style>