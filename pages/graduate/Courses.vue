<template>
  <div v-if="courses">
    <button @click="toggleCourses">
      {{ !isCourse ? "courses" : "assesmentes" }}
    </button>
    <div v-if="isCourse">
      <Table :courses="courses" />
    </div>
    <div v-if="!isCourse">
      <Table :courses="assessments" />
      <select
        name="code"
        id=""
        v-for="assesment in assessments"
        :key="assesment.id"
      >
        <option :value="assesment.course_code">
          name :{{ assesment.course_name }} || code:{{ assesment.course_code }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { getCourses } from "../../api/requests";
import Table from "../../components/Table";

export default {
  layout: "graduate",
  watchQuery: ["dashboard"],
  components: {
    Table,
  },
  data() {
    return {
      isCourse: true,
      courses: null,
      assessments: null,
    };
  },
  async created() {
    const token = await this.$store.state.auth.token;
    if (token) {
      try {
        const res = await getCourses(token);
        const coursesArr = res.filter((course) => course.assessment === false);
        const assesmentsArr = res.filter(
          (course) => course.assessment === true
        );
        this.courses = coursesArr;
        this.assessments = assesmentsArr;
      } catch (error) {
        console.log(error);
      }
    }
  },

  methods: {
    toggleCourses() {
      this.isCourse = !this.isCourse;
    },
  },
};
</script>

<style>
</style>