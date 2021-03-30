<template>
  <div class="g-register">
    <div class="g-register--form">
      <RegisterEmployeeForm />
    </div>
    <img src="../../assets/sittingMan.svg" alt="man sitting" />
  </div>
</template>

<script>
import RegisterEmployeeForm from "../../components/Register/RegisterEmployeeForm";

export default {
  head() {
    return {
      title: "Register employee",
    };
  },
  components: { RegisterEmployeeForm },
  layout: "graduate",
};
</script>

<style scoped>
.register--main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>