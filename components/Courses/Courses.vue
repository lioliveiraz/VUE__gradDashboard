<template>
  <div class="courses--main">
    <BaseButton
      :handleClick="toggleCourses"
      :value="!isCourse ? 'courses' : 'assesmentes'"
    />

    <div class="tables">
      <h3 class="text-gray-600 m-2 text-2xl">
        {{ isCourse ? "Courses" : "Assessments" }}
      </h3>

      <CoursesTable v-if="isCourse" :courses="coursesArr" />

      <CoursesTable v-if="!isCourse" :courses="assessmentsArr" />
    </div>
  </div>
</template>

<script>
import CoursesTable from "./CoursesTable";
import BaseButton from "../../components/Style/BaseButton";

export default {
  data() {
    return {
      isCourse: false,
    };
  },
  components: {
    CoursesTable,
    BaseButton,
  },
  props: {
    coursesArr: Array,
    assessmentsArr: Array,
  },
  methods: {
    toggleCourses() {
      this.isCourse = !this.isCourse;
    },
  },
};
</script>

<style scoped>
.courses--main {
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 100%;
}
.courses--main div:first-child {
  height: 70%;
  width: 100%;
  overflow: scroll;
}

button {
  text-transform: uppercase;
  align-self: flex-start;
  border-color: none;
  background: #00aaff;
  align-self: center;
}
</style>