<template>
  <table class="table-auto border-separate" data-testId="score_table">
    <thead>
      <tr class="border-4">
        <th class="border border-teal-600 p-2">N</th>

        <th class="border border-teal-600 p-2">
          {{ this.TABLE_HEAD_ASSCODE_ENGLISH }}
        </th>

        <th class="border border-teal-600 p-2">
          {{ this.TABLE_HEAD_SCORES_ENGLISH }}
        </th>
        <th class="border border-teal-600 p-2">
          {{ this.TABLE_HEAD_PASSED_ENGLISH }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border border-teal-600 p-2"
        v-for="({ code, score }, i) in scores"
        :key="i"
      >
        <td class="border border-teal-600 p-2" data-testId="score_table--index">
          {{ i + 1 }}
        </td>
        <td class="border border-teal-600 p-2" data-testId="score_table--code">
          {{ code }}
        </td>
        <td class="border border-teal-600 p-2" data-testId="score_table--score">
          {{ score }}
        </td>
        <td
          :class="
            score > 140
              ? 'border border-teal-600 p-2 bg-green-900 text-gray-200'
              : 'border border-teal-600 p-2 bg-red-800 text-gray-200'
          "
        >
          {{ score > 140 ? "Yes" : "No" }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["scores"],
  layout: "admLayout",
  middleware: "courses",

  created() {},
};
</script>

<style>
table {
  width: 100%;
}
</style>