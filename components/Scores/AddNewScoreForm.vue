<template>
  <form @submit="handleSubmit" :key="key" class="g-form-wrapper">
    <div class="g-form-wrapper--inner">
      <select name="code" v-model="userInput.code" class="g-selector" required>
        <option
          class="g-selector--options"
          :value="assessment.course_code"
          v-for="assessment in assessments"
          :key="assessment.id"
        >
          {{ assessment.course_name }} ({{ assessment.course_code }})
        </option>
      </select>
      <BaseInput
        @getUserInput="getUserInput"
        :attributeObj="{
          type: this.NUMBER_INPUT,
          name: this.SCORE_INPUT,
          required: true,
        }"
      />

      <input :type="this.BUTTON_SUBMIT" class="g-base-btn-green" />
    </div>
  </form>
</template>

<script>
import { addScore } from "../../api/requests/post";
import { mapState, mapActions } from "vuex";
import BaseInput from "../BaseInput";
export default {
  data() {
    return {
      userInput: {},
      key: 0,
    };
  },
  components: { BaseInput },
  computed: {
    ...mapState("auth", ["user_id", "token"]),
    ...mapState("courses", ["courses", "assessments"]),
    scoreInput() {
      return this.$t("SCORE_INPUT");
    },
  },
  methods: {
    ...mapActions("courses", ["handleAddScore"]),

    getUserInput(inputValue, inputName) {
      this.userInput[inputName] = inputValue;
    },

    async handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await addScore(this.userInput, this.user_id, this.token);
        this.handleAddScore(this.userInput);
        this.$toast(res.data.message, { type: this.TOAST_SUCCESS });
        this.key++;
      } catch (err) {
        this.$toast("Something went wrong! Try again latter", {
          type: this.TOAST_ERROR,
        });
      }
    },
  },
};
</script>

<style scoped>
</style>