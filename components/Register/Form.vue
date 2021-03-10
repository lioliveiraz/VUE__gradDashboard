<template>
  <form @submit="handleSubmit">
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'text',
        name: 'empId',
        placeholder: 'employer ID',
        required: true,
      }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'password',
        name: 'password',

        required: true,
      }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'text',
        name: 'name',
        placeholder: 'employer name',
        required: true,
      }"
    />
    <input type="submit" class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1" />
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { registerEmployee } from "../../api/requests";

export default {
  data() {
    return {
      employeeObj: {},
    };
  },
  computed: {
    ...mapGetters("auth", ["token"]),
  },
  methods: {
    getUserInput(inputValue, inputName) {
      this.employeeObj[inputName] = inputValue;
    },
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await registerEmployee(this.employeeObj, this.token);
        console.log(res.data.message);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
};
</script>

<style>
</style>