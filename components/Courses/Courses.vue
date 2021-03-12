<template>
  <div class="courses--main">
    <button
      @click="toggleCourses"
      class="bg-teal-500 text-gray-100 w-4/12 h-12 md:m-4 font-bold"
    >
      {{ !isCourse ? "courses" : "assesmentes" }}
    </button>

    <div>
      <h3 class="text-gray-600 m-2 text-2xl">
        {{ isCourse ? "Courses" : "Assessments" }}
      </h3>

      <div v-if="isCourse">
        <Table :courses="coursesArr" />
      </div>
      <div v-if="!isCourse">
        <Table :courses="assessmentsArr" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from "./Table";

export default {
  data() {
    return {
      isCourse: true,
    };
  },
  components: {
    Table,
  },
  props: ["coursesArr", "assessmentsArr"],
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
}
button {
  text-transform: uppercase;
  align-self: flex-start;
}
</style>