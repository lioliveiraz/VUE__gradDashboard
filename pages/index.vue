<template>
  <div class="g-login-box">
    <form
      @submit="handleSubmit"
      class="g-form-wrapper"
      data-testId="login_form"
    >
      <div class="g-form-wrapper--inner">
        <div class="locker">
          <TheLogo />
        </div>

        <BaseInput
          @getUserInput="getUserInput"
          :attributeObj="{
            type: this.TEXT_INPUT,
            name: 'empId',
            placeholder: '875463',
            required: true,
          }"
        />
        <BaseInput
          @getUserInput="getUserInput"
          :attributeObj="{
            type: this.PASSWORD_INPUT,
            name: this.PASSWORD_INPUT,
            required: true,
          }"
        />

        <input
          :type="this.BUTTON_SUBMIT"
          class="g-base-btn-submit"
          :value="this.button_input"
          data-testId="login_button"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import { handleLogin } from "../api/requests/post";
import { mapActions, mapGetters } from "vuex";
import { userValidation } from "../helpers/validation";
import global from "../mixin/global";
import TheLogo from "../components/Style/TheLogo";

export default {
  name: "HomePage",
  nuxtI18n: false,
  components: {
    BaseInput,
    TheLogo,
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
    button_input() {
      return this.$t("BUTTON_LOGIN");
    },
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
</style>
