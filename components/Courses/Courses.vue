<template>
  <div class="courses--main">
    <button
      @click="toggleCourses"
      class="text-gray-100 h-12 md:m-4 font-bold p-2"
    >
      {{ !isCourse ? "courses" : "assesmentes" }}
    </button>

    <div class="tables">
      <h3 class="text-gray-600 m-2 text-2xl">
        {{ isCourse ? "Courses" : "Assessments" }}
      </h3>

      <Table v-if="isCourse" :courses="coursesArr" />

      <Table v-if="!isCourse" :courses="assessmentsArr" />
    </div>
  </div>
</template>

<script>
import Table from "./Table";

export default {
  data() {
    return {
      isCourse: false,
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