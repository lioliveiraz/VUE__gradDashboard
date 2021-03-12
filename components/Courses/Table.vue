<template>
  <table class="table-auto border-separate" data-testId="course_table">
    <thead>
      <tr>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_WEEK_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_COURSECODE_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_COURSENAME_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_MODE_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_SOURCE_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_DURATION_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-1 md:p-4">
          {{ this.TABLE_HEAD_LINK_ENGLISH }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-emerald-200" v-for="course in courses" :key="course.id">
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-week"
        >
          {{ course.week }}
        </td>
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-code"
        >
          {{ course.course_code }}
        </td>
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-name"
        >
          {{ course.course_name }}
        </td>
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-assessment"
        >
          {{ course.assessment ? "assessment" : "self-paced" }}
        </td>
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-source"
        >
          {{ course.source }}
        </td>
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-duration"
        >
          {{ course.duration }}h
        </td>
        <td
          class="border border-teal-600 p-1 md:p-4"
          data-testId="course_table-link"
        >
          <a :href="course.link">link</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["courses"],
};
</script>

<style>
th {
  text-transform: uppercase;
}
</style>