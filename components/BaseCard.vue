  
<template>
  <div class="w-full card--main">
    <div>
      <h4 data-testId="graduate_name" class="text-orange-100 text-6xl">
        {{ graduated.name }}
      </h4>

      <p class="text-gray-100" data-testId="graduate_empID">
        Employeer id: {{ graduated.empId }}
      </p>
    </div>
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
.card--main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.card--main div {
  width: 80%;
  height: 80%;
  text-transform: capitalize;
  cursor: pointer;
}
.card--main:hover {
  box-shadow: inset 1px 1px 100px #00c300;
}
</style>