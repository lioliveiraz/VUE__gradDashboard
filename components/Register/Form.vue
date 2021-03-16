<template>
  <form @submit="handleSubmit" :key="key">
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.EMPID_INPUT,
        placeholder: 'employer ID',
        required: true,
      }"
    />
    {{ errors.empId && errors.empId }}
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.PASSWORD_INPUT,
        name: this.PASSWORD_INPUT,

        required: true,
      }"
    />
    {{ errors.password && errors.password }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.EMP_NAME_INPUT,
        placeholder: 'employer name',
        required: true,
      }"
    />
    {{ errors.name && errors.name }}

    <input :type="this.BUTTON_SUBMIT" class="text-gray-100 w-2/4 h-12 m-3" />
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { registerEmployee } from "../../api/requests/post";
import { userValidation } from "../../helpers/validation";

export default {
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
          this.key++;
        } catch (err) {
          this.$toast(err.response.data.message, { type: this.TOAST_ERROR });
        }
      }
    },
  },
};
</script>

<style scoped>
input[type="submit"] {
  background: #00aaff;
}
form {
  width: 100%;
}
</style>