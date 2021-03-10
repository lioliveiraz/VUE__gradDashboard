<template>
  <div
    class="home--main border-gray-800 bg-purple-100 rounded shadow-2xl w-8/12 md:w-3/5 lg:w-2/4 xl:w-1/4"
  >
    <form @submit="handleSubmit" class="home--form w-full h-full">
      <div class="h-24">
        <img src="../assets/logo.svg" alt="logo" id="logo" />
      </div>

      <Input
        @getUserInput="getUserInput"
        :attributeObj="{
          type: 'text',
          name: 'empId',
          placeholder: '875463',
          required: true,
        }"
      />
      <Input
        @getUserInput="getUserInput"
        :attributeObj="{ type: 'password', name: 'password', required: true }"
      />
      <input
        type="submit"
        class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1"
        value="LOGIN"
      />
    </form>
  </div>
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
      toast: "",
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
          this.actionLogin(res.data);
          this.adm == "ADM"
            ? this.$router.push({ query: "dashboard" })
            : this.$router.push({ query: "adm_dashboard" });
        })
        .catch((err) =>
          this.$toast(err.response.data.message, { type: "error" })
        );
    },
  },
};
</script>

<style>
.home--main {
  height: 75%;
}
.home--form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#logo {
  width: 100%;
  height: 100%;
}
</style>
