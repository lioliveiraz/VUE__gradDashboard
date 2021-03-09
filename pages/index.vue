<template>
  <form @submit="handleSubmit">
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'text', name: 'empId', placeholder: '875463' }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'password', name: 'password' }"
    />
    <input type="submit" />
  </form>
</template>

<script>
import Input from "../components/Input";
import { handleLogin } from "../api/requests";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    Input,
  },

  head() {
    return { title: "GradDash" };
  },
  data() {
    return {
      userData: {},
      errors: {},
    };
  },
  computed: {
    ...mapGetters("auth", ["adm"]),
  },
  methods: {
    ...mapActions("auth", ["actionLogin"]),
    getUserInput(inputValue, inputName) {
      this.userData[inputName] = inputValue;
    },
    async handleSubmit(e) {
      e.preventDefault();
      handleLogin(this.userData)
        .then((res) => {
          this.actionLogin(res);
          this.adm == "ADM"
            ? this.$router.push({ query: "dashboard" })
            : this.$router.push({ query: "adm_dashboard" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>
