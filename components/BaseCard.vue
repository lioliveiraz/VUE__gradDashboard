  
<template>
    <div class="flex-auto p-4">
      <p class="g-adm-dashboard-card--title" data-testId="graduate_name">
        {{ graduated.name }}
      </p>
      <p class="g-adm-dashboard-card--subtitle" data-testId="graduate_empID">
        {{ $t("EMPLOYER_ID_VALUE") }}: {{ graduated.empId }}
      </p>
    </div>
</template>

    <script>
export default {
  props: {
    graduated: Object,
  },
};
</script>
<style scoped>
</style>