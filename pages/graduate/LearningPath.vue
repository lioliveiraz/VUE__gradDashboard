<template>
  <div v-if="courses && assessments">
    <Courses :courses-arr="courses" :assessments-arr="assessments" />
  </div>
</template>

<script>
import Courses from "../../components/Courses/Courses";
import { mapState } from "vuex";

export default {
  nuxtI18n: false,

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

  computed: {
    ...mapState("courses", ["courses", "assessments"]),
  },
};
</script>

<style>
</style>