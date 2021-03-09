<template>
  <div>
    <form @submit="handleSubmit">
      <p>{{ toast }}</p>
      <select name="code" v-model="userInput.code">
        <option
          :value="assessment.course_code"
          v-for="assessment in assessmentsArr"
          :key="assessment.id"
        >
          {{ assessment.course_name }}({{ assessment.course_code }})
        </option>
      </select>
      <Input
        @getUserInput="getUserInput"
        :attributeObj="{ type: 'number', name: 'score', placeholder: '875463' }"
      />
      <input type="submit" />
    </form>

    <div v-for="(score, index) in scores" :key="index">
      <p>{{ score.code }} || {{ score.score }}</p>
    </div>
  </div>
</template>

<script>
import Input from "../../components/Input";
import { addScore } from "../../api/requests";
import { mapState } from "vuex";

export default {
  name: "gaduateScores",
  layout: "graduate",
  components: Input,

  data() {
    return {
      userInput: {},
      toast: "",
    };
  },
  computed: {
    ...mapState("auth", ["user_id", "token"]),
    ...mapState("courses", ["coursesArr", "assessmentsArr", "scores"]),
  },
  methods: {
    getUserInput(inputValue, inputName) {
      this.userInput[inputName] = inputValue;
    },

    async handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await addScore(this.userInput, this.user_id, this.token);
        this.toast = res.message;
      } catch (error) {
        console.log(error);
        this.toast = "Something went wrong";
      }
    },
  },
};
</script>

<style>
</style>