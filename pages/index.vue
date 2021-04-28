<template>
  <div class="g-login-box">
    <form
      @submit="handleSubmit"
      class="g-form-wrapper "
      data-testId="login_form"
    >
      <div class="g-form-wrapper--inner">
        <div class="locker">
          <LazyHydrate never>
            <TheLogo />
          </LazyHydrate>
        </div>
        <LazyHydrate on-interaction>
          <BaseInput
            @getUserInput="getUserInput"
            :attributeObj="{
              type: this.TEXT_INPUT,
              name: 'empId',
              placeholder: '875463',
              required: true,
              label: 'emp id'
            }"
          />
        </LazyHydrate>

        <LazyHydrate on-interaction>
          <BaseInput
            @getUserInput="getUserInput"
            :attributeObj="{
              type: this.PASSWORD_INPUT,
              name: this.PASSWORD_INPUT,
              required: true
            }"
          />
        </LazyHydrate>
        <div class="g-margin-top-button">
          <input
            :type="this.BUTTON_SUBMIT"
            :class="
              isFormValid ? 'g-base-btn-green ' : 'g-base-btn-green g-disabled'
            "
            :value="this.button_input"
            data-testId="login_button"
            :disabled="!isFormValid"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { handleLogin } from "../api/requests/post";
import { mapActions, mapGetters } from "vuex";
import global from "../mixin/global";
import { isUserAdm } from "../helpers/service";
import LazyHydrate from "vue-lazy-hydration";
import { formUserMixin } from "@/mixin/formUserMixin";

export default {
  name: "HomePage",
  nuxtI18n: false,
  components: {
    LazyHydrate,
    BaseInput: () => import("../components/BaseInput"),
    TheLogo: () => import("../components/Style/TheLogo")
  },
  mixins: [global, formUserMixin],

  head() {
    return { title: "Welcome" };
  },
  data() {
    return {
      formData: {},
      isFormValid: false
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
    isAdm() {
      return isUserAdm(this.getToken);
    },
    button_input() {
      return this.$t("BUTTON_LOGIN");
    }
  },
  methods: {
    ...mapActions("auth", ["login"]),

    async handleSubmit(e) {
      e.preventDefault();
      if (!this.isFormValid) return null;
      handleLogin(this.formData)
        .then(res => {
          this.login(res.data);
          this.isAdm
            ? this.$router.push({ query: "adm_dashboard" })
            : this.$router.push({ query: "dashboard" });
        })
        .catch(err => {
          this.$toast(err.response.data.message, { type: "error" });
        });
    }
  }
};
</script>

<style></style>
