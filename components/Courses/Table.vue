<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Week</th>
        <th>Course Code</th>
        <th>Course Name</th>
        <th>Mode</th>
        <th>Source</th>
        <th>Duration</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-emerald-200" v-for="course in courses" :key="course.id">
        <td>{{ course.week }}</td>
        <td>{{ course.course_code }}</td>
        <td>{{ course.course_name }}</td>
        <td>{{ course.assessment ? "assessment" : "self-paced" }}</td>
        <td>{{ course.source }}</td>
        <td>{{ course.duration }}</td>
        <td><a :href="course.link">link</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["courses"],
  mounted() {},
};
</script>

<style>
</style>