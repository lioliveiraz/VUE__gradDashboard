<template>
  <div class="register--main">
    <div class="register--form">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../../components/Register/Form";

export default {
  components: { Form },
  layout: "admLayout",
};
</script>

<style scoped>
.register--main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register--form {
  height: 60%;
  width: 80%;
}

@media screen and (min-width: 700px) {
  .register--form {
    height: 60%;
    width: 70%;
  }
}
</style>