<template>
  <form @submit="handleSubmit" :key="key" class="g-form-wrapper">
    <div class="g-form-wrapper--inner">
      <BaseInput
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.TEXT_INPUT,
          name: this.EMPID_INPUT,
          placeholder: 'employer ID',
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

      <BaseInput
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.TEXT_INPUT,
          name: this.EMP_NAME_INPUT,
          placeholder: 'employer name',
          required: true,
        }"
      />

      <input
        :type="this.BUTTON_SUBMIT"
        :class="isFormValid ? 'g-base-btn-blue' : 'g-base-btn-blue g-disabled'"
        :disabled="!isFormValid"
      />
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { registerEmployee } from "../../api/requests/post";
import { isObjectEmpty, isObjectValuesEmpty } from "../../helpers/service";
import { userValidation } from "../../helpers/validation";
import BaseInput from "../BaseInput";

export default {
  components: { BaseInput },
  data() {
    return {
      employeeObj: {},
      key: 0,
      isFormValid: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  methods: {
    formValidation() {
      const errors = userValidation(this.employeeObj);
      this.isFormValid = isObjectEmpty(errors);
    },
    getUserInput(inputValue, inputName) {
      this.employeeObj[inputName] = inputValue;
      if (
        !isObjectEmpty(this.employeeObj) &&
        isObjectValuesEmpty(this.employeeObj).length === 3
      ) {
        this.formValidation();
      } else {
        this.isFormValid = false;
      }
    },
    async handleSubmit(e) {
      e.preventDefault();
      const errors = userValidation(this.employeeObj);
      if (!this.isFormValid) return null;

      try {
        const res = await registerEmployee(this.employeeObj, this.getToken);
        this.errors = {};

        this.$toast(res.data.message, { type: this.TOAST_SUCCESS });
        this.key = this.key + 1;
      } catch (err) {
        this.$toast(err.response.data.message, { type: this.TOAST_ERROR });
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
}
</style>