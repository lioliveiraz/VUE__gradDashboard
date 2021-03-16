<template>
  <div
    class="home--main border-gray-800 bg-purple-100 rounded shadow-2xl w-11/12 md:w-3/5 lg:w-2/4 xl:w-1/4"
  >
    <form
      @submit="handleSubmit"
      class="home--form w-full h-full"
      data-testId="login_form"
    >
      <div class="h-24">
        <Locker />
      </div>

      <Input
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.TEXT_INPUT,
          name: 'empId',
          placeholder: '875463',
          required: true,
        }"
      />
      <Input
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.PASSWORD_INPUT,
          name: this.PASSWORD_INPUT,
          required: true,
        }"
      />

      <input
        :type="this.BUTTON_SUBMIT"
        class="text-gray-100 w-2/4 h-12 m-2 p-2"
        :value="this.LOGIN_VALUE"
        data-testId="login_button"
      />
    </form>
  </div>
</template>

<script>
import Input from "../components/Input";
import { handleLogin } from "../api/requests/post";
import { mapActions, mapGetters } from "vuex";
import { userValidation } from "../helpers/validation";
import global from "../mixin/global";
import Locker from "../components/Style/Locker";

export default {
  name: "HomePage",
  components: {
    Input,
    Locker,
  },
  mixins: [global],

  head() {
    return { title: "Welcome" };
  },
  data() {
    return {
      loginUserData: {},
      errors: {},
    };
  },
  computed: {
    ...mapGetters("auth", ["isAdm"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),

    getUserInput(inputValue, inputName) {
      this.loginUserData[inputName] = inputValue;
    },

    async handleSubmit(e) {
      e.preventDefault();
      const errors = userValidation(this.loginUserData);

      if (Object.entries(errors).length === 0) {
        handleLogin(this.loginUserData)
          .then((res) => {
            this.login(res.data);
            this.isAdm
              ? this.$router.push({ query: "adm_dashboard" })
              : this.$router.push({ query: "dashboard" });
          })
          .catch((err) =>
            this.$toast(err.response.data.message, { type: "error" })
          );
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-button {
  display: none;
}
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
}
input[type="submit"] {
  cursor: pointer;
  text-transform: uppercase;
  background: #00aaff;
  font-weight: 700;
}
button {
  text-transform: uppercase;
}

@media only screen and (max-height: 414px) {
  .home--main {
    height: 100%;
    width: 70%;
  }
}
</style>
