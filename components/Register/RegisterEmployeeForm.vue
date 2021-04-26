<template>
  <form @submit="handleSubmit" :key="key" class="g-form-wrapper">
    <div class="g-form-wrapper--inner">
      <BaseInput
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.TEXT_INPUT,
          name: this.EMPID_INPUT,
          placeholder: 'employer ID',
           label:'emp id',
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
        
        }"
      />

      <input
        :type="this.BUTTON_SUBMIT"
        :class="isFormValid ? 'g-base-btn-green' : 'g-base-btn-green g-disabled'"
        :disabled="!isFormValid"
      />
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { registerEmployee } from "../../api/requests/post";
import { userValidation } from "../../helpers/validation";
import BaseInput from "../BaseInput";
import {formUserMixin} from '@/mixin/formUserMixin'

export default {
  components: { BaseInput },
  mixins:[formUserMixin],

  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const errors = userValidation(this.formData);
      if (!this.isFormValid) return null;

      try {
        const res = await registerEmployee(this.formData, this.getToken);
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

</style>