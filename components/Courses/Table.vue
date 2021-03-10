<template>
  <table class="table-auto border-separate">
    <thead>
      <tr>
        <th class="border border-teal-600 p-1 md:p-4">Week</th>
        <th class="border border-teal-600 p-1 md:p-4">Course Code</th>
        <th class="border border-teal-600 p-1 md:p-4">Course Name</th>
        <th class="border border-teal-600 p-1 md:p-4">Mode</th>
        <th class="border border-teal-600 p-1 md:p-4">Source</th>
        <th class="border border-teal-600 p-1 md:p-4">Duration</th>
        <th class="border border-teal-600 p-1 md:p-4">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-emerald-200" v-for="course in courses" :key="course.id">
        <td class="border border-teal-600 p-1 md:p-4">{{ course.week }}</td>
        <td class="border border-teal-600 p-1 md:p-4">
          {{ course.course_code }}
        </td>
        <td class="border border-teal-600 p-1 md:p-4">
          {{ course.course_name }}
        </td>
        <td class="border border-teal-600 p-1 md:p-4">
          {{ course.assessment ? "assessment" : "self-paced" }}
        </td>
        <td class="border border-teal-600 p-1 md:p-4">{{ course.source }}</td>
        <td class="border border-teal-600 p-1 md:p-4">
          {{ course.duration }}h
        </td>
        <td class="border border-teal-600 p-1 md:p-4">
          <a :href="course.link">link</a>
        </td>
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