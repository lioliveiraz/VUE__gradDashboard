<template>
  <form @submit="handleSubmit" class="w-full">
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
      :attributeObj="{ type: 'number', name: 'score', required: true }"
    />

    <input type="submit" class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1" />
  </form>
</template>

<script>
import { addScore } from "../../api/requests/post";
import Input from "../Input";
import { mapState } from "vuex";

export default {
  data() {
    return {
      userInput: {},
    };
  },
  components: { Input },
  props: ["scores", "courses", "assessments", "handleKey"],
  computed: {
    ...mapState("auth", ["user_id", "token"]),
  },
  methods: {
    getUserInput(inputValue, inputName) {
      this.userInput[inputName] = inputValue;
    },

    async handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await addScore(this.userInput, this.user_id, this.token);
        this.$toast(res.data.message, { type: "success" });

        this.handleKey();
      } catch (err) {
        this.$toast("Something went wrong! Try again latter", {
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
</style>