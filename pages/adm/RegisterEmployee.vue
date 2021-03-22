<template>
  <div class="register--main">
    <div class="register--form">
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
.register--form {
  height: 50%;
  width: 80%;
}
.register--main img {
  height: 30%;
  align-self: flex-end;
  justify-self: center;
}

@media screen and (min-width: 700px) {
  .register--form {
    height: 40%;
    width: 60%;
  }
}
@media screen and (min-width: 1200px) {
  .register--form {
    height: 30%;
    width: 40%;
  }
  .register--main img {
    height: 40%;
    margin-right: 10%;
  }
}
</style>