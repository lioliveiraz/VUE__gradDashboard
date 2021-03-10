<template>
  <div class="update--main w-8/12">
    <div>
      <button
        @click="toggleComponent"
        class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1"
      >
        Add New Course/Assessment
      </button>
      <div v-if="getCourses && getAssessments">
        <Courses :coursesArr="getCourses" :assessmentsArr="getAssessments" />
      </div>
    </div>
    <div
      v-if="isFormOpen"
      class="form bg-teal-900 p-3 rounded border-2 border-blue-300 text-blue-100"
    >
      <CourseForm :toggleComponent="toggleComponent" />
    </div>
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
      isFormOpen: false,
    };
  },
  computed: {
    ...mapGetters("courses", ["getCourses", "getAssessments"]),
  },
  mounted() {},
  methods: {
    toggleComponent() {
      this.isFormOpen = !this.isFormOpen;
    },
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
.update--main {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
}
.update--main div:first-child {
  height: 60%;
}

.form {
  width: 50%;
  height: 80%;
  position: absolute;
  overflow-y: scroll;
}
</style>