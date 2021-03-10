<template>
  <table class="table-auto border-separate">
    <thead>
      <tr class="border-4">
        <th class="border border-teal-600 p-2">N</th>

        <th class="border border-teal-600 p-2">Assesment Code</th>

        <th class="border border-teal-600 p-2">Score</th>
        <th class="border border-teal-600 p-2">Passed</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border border-teal-600 p-2"
        v-for="({ code, score }, i) in scores"
        :key="i"
      >
        <td class="border border-teal-600 p-2">{{ i + 1 }}</td>
        <td class="border border-teal-600 p-2">{{ code }}</td>
        <td class="border border-teal-600 p-2">{{ score }}</td>
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

  created() {
    console.log("here");
  },
};
</script>

<style>
table {
  width: 100%;
}
</style>