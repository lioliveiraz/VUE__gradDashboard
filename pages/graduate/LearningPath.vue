<template>
  <div v-if="courses && assessments" class="w-full h-full courses--main">
    <Courses :coursesArr="courses" :assessmentsArr="assessments" />
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
    ...mapState("courses", ["courses", "assessments"]),
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-button {
  display: none;
}
.courses--main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>