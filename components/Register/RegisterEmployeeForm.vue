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
          error: errors.empId && errors.empId,
        }"
      />

      <BaseInput
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.PASSWORD_INPUT,
          name: this.PASSWORD_INPUT,

          required: true,
          error: errors.password && errors.password,
        }"
      />

      <BaseInput
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.TEXT_INPUT,
          name: this.EMP_NAME_INPUT,
          placeholder: 'employer name',
          required: true,
          error: errors.name && errors.name,
        }"
      />

      <input :type="this.BUTTON_SUBMIT" class="g-base-btn-submit" />
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { registerEmployee } from "../../api/requests/post";
import { userValidation } from "../../helpers/validation";
import BaseInput from "../BaseInput";

export default {
  components: { BaseInput },
  data() {
    return {
      employeeObj: {},
      errors: {},
      key: 0,
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  methods: {
    getUserInput(inputValue, inputName) {
      this.employeeObj[inputName] = inputValue;
    },
    async handleSubmit(e) {
      e.preventDefault();
      const errors = userValidation(this.employeeObj);
      if (Object.entries(errors).length !== 0) {
        this.errors = errors;
      } else {
        try {
          const res = await registerEmployee(this.employeeObj, this.getToken);
          this.errors = {};

          this.$toast(res.data.message, { type: this.TOAST_SUCCESS });
          this.key = this.key + 1;
        } catch (err) {
          this.$toast(err.response.data.message, { type: this.TOAST_ERROR });
        }
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