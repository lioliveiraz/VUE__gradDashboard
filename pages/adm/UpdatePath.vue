<template>
  <div class="g-update-path">
    <div v-if="getCourses && getAssessments" class="w-full">
      <Courses :coursesArr="getCourses" :assessmentsArr="getAssessments" />
      <div class="g-update-path-toggleButton">
        <BaseButton :handleClick="toggleComponent" value="add new" />
      </div>
    </div>
    <div v-if="isFormOpen" class="g-update-path--form focus:outline-none">
      <div v-if="isFormOpen" class="g-update-path--overlay"></div>
      <AddNewCourseForm :toggleComponent="toggleComponent" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Courses from "../../components/Courses/Courses";
import AddNewCourseForm from "../../components/Courses/AddNewCourseForm";
import BaseButton from "../../components/Style/BaseButton";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: "Update Path",
    };
  },
  middleware: "courses",
  components: { Courses, AddNewCourseForm, BaseButton },
  layout: "graduate",
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

<style >
</style>