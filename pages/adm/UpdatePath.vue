<template>
  <div class="update--main w-8/12">
    <div v-if="getCourses && getAssessments">
      <Courses :coursesArr="getCourses" :assessmentsArr="getAssessments" />
      <BaseButton :handleClick="toggleComponent" value="add new" />
    </div>
    <div v-if="isFormOpen" class="form p-3 rounded text-gray-800 shadow-lg">
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