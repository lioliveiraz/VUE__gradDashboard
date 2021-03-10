  
<template>
  <div class="w-full card--main">
    <div>
      <h4 class="text-orange-100 text-6xl">{{ graduated.name }}</h4>

      <p class="text-gray-100">Employeer id: {{ graduated.empId }}</p>
    </div>
  </div>
</template>

    <script>
export default {
  props: ["graduated"],
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
  background: teal;
}
</style>