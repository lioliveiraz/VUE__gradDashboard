<template>
  <table class="g-table-wrapper" data-testId="score_table">
    <thead>
      <tr class="font-bold">
        <th class="g-table-cell">N</th>

        <th class="g-table-cell">
          {{ $t("TABLE_HEAD_ASSCODE") }}
        </th>

        <th class="g-table-cell">
          {{ $t("TABLE_HEAD_SCORES") }}
        </th>
        <th class="g-table-cell">
          {{ $t("TABLE_HEAD_PASSED") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="g-table-cell" v-for="({ code, score }, i) in scores" :key="i">
        <td class="g-table-cell" data-testId="score_table--index">
          {{ i + 1 }}
        </td>
        <td class="g-table-cell" data-testId="score_table--code">
          {{ code }}
        </td>
        <td class="g-table-cell" data-testId="score_table--score">
          {{ score }}
        </td>
        <td
          :class="
            score > 140
              ? ' g-table-cell  g-cell-passedAss'
              : ' g-table-cell  g-cell-failedAss'
          "
        >
          {{ score > 140 ? $t("YES") : $t("NO") }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: { scores: Array },
  layout: "dash_layout",
  middleware: "courses",

  created() {},
};
</script>

<style>
</style>