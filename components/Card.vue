  
<template>
  <div>
    <h4>{{ graduated.name }}</h4>

    <p>Employeer id: {{ graduated.empId }}</p>
  </div>
</template>

    <script>
export default {
  props: ["graduated"],
};
</script>