<template>
  <div class="update--main w-8/12">
    <div v-if="getCourses && getAssessments">
      <Courses :coursesArr="getCourses" :assessmentsArr="getAssessments" />
      <button
        @click="toggleComponent"
        class="text-gray-100 m-1 h-12 p-2 font-bold add_new"
      >
        Add New
      </button>
    </div>
    <div v-if="isFormOpen" class="form p-3 rounded text-gray-800 shadow-lg">
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
  flex-direction: column;
}

.form {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: scroll;
  background: white;
  display: flex;
  justify-content: center;
}
.add_new {
  background: #00aaff;
  position: relative;
  top: 20%;
  left: 85%;
}
@media screen and (min-width: 700px) {
  .form {
    width: 70%;
    height: 70%;
  }
}
@media screen and (min-width: 1200px) {
  .form {
    width: 40%;
    height: 90%;
  }
}
</style>