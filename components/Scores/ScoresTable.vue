<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>N</th>

        <th>Assesment Code</th>

        <th>Score</th>
        <th>Passed</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="bg-emerald-200"
        v-for="({ code, score }, i) in scores"
        :key="i"
      >
        <td>{{ i + 1 }}</td>
        <td>{{ code }}</td>
        <td>{{ score }}</td>
        <td>{{ score > 140 ? "Yes" : "No" }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["scores"],
  layout: "admLayout",

  mounted() {},
};
</script>

<style>
</style>