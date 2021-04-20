<template>

  <table class="g-table-wrapper" data-testId="course_table">
    <thead>
      <tr class="g-table-header">
        <th class="g-table-week-cell">
          {{ $t("TABLE_HEAD_WEEK") }}
        </th>
        <th class="g-table-header-cell g-table-cell-hide">
          {{ $t("TABLE_HEAD_COURSECODE") }}
        </th>
        <th class="g-table-header-cell">
          {{ $t("TABLE_HEAD_COURSENAME") }}
        </th>
        <th class="g-table-header-cell g-table-cell-hide">
          {{ $t("TABLE_HEAD_MODE") }}
        </th>
        <th class="g-table-header-cell g-table-cell-hide">
          {{ $t("TABLE_HEAD_SOURCE") }}
        </th>
        <th class="g-table-header-cell g-table-cell-hide">
          {{ $t("TABLE_HEAD_DURATION") }}
        </th>
        <th class="g-table-header-cell">
          {{ $t("TABLE_HEAD_LINK") }}
        </th>
      </tr>
    </thead>
    <tbody class="g-table-body">
      <tr class="g-table-body-tr" v-for="course in courses" :key="course.id">
        <td class="g-table-week-cell" data-testId="course_table-week">
          {{ course.week }}
        </td>
        <td class=" g-color-primary g-table-cell g-table-cell-hide" data-testId="course_table-code">
          {{ course.course_code }}
        </td>
        <td class="g-table-cell text-black" data-testId="course_table-name">
          {{ course.course_name }}
        </td>
        <td class="g-table-cell text-black g-table-cell-hide" data-testId="course_table-assessment">
          {{ course.assessment ? $t("ASSESSMENTS_VALUE") : "self-paced" }}
        </td>
        <td class="g-table-cell text-gray-600 g-table-cell-hide" data-testId="course_table-source">
          {{ course.source }}
        </td>
        <td class="g-table-cell text-black g-table-cell-hide" data-testId="course_table-duration">
          {{ course.duration }}h
        </td>
        <td class="g-table-cell" data-testId="course_table-link">
          <a :href="course.link" class="g-color-primary">link</a>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  props: { courses: Array },
};
</script>

<style>
@import "../../assets/styles/tables.css";
</style>