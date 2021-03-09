<template>
  <div>
    <button @click="toggleCourses">
      {{ !isCourse ? "courses" : "assesmentes" }}
    </button>
    <div v-if="isCourse">
      <Table :courses="coursesArr" />
    </div>
    <div v-if="!isCourse">
      <Table :courses="assessmentsArr" />
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

<style>
</style>