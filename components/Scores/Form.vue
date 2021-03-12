<template>
  <form @submit="handleSubmit" class="w-full" :key="key">
    <select
      name="code"
      v-model="userInput.code"
      class="h-12 bg-gray-300 border-yellow-200 w-5/6 m-2"
    >
      <option
        :value="assessment.course_code"
        v-for="assessment in assessments"
        :key="assessment.id"
      >
        {{ assessment.course_name }}({{ assessment.course_code }})
      </option>
    </select>
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.NUMBER_INPUT,
        name: this.SCORE_INPUT,
        required: true,
      }"
    />

    <input
      :type="this.BUTTON_SUBMIT"
      class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1"
    />
  </form>
</template>

<script>
import { addScore } from "../../api/requests/post";
import Input from "../Input";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      userInput: {},
      key: 0,
    };
  },
  components: { Input },
  props: ["scores", "courses", "assessments", "handleKey"],
  computed: {
    ...mapState("auth", ["user_id", "token"]),
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
        this.handleKey();
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