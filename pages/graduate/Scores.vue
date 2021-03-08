<template>
  <form @submit="handleSubmit">
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'select', name: 'code', placeholder: '875463' }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'number', name: 'score', placeholder: '875463' }"
    />
    <input type="submit" />
  </form>
</template>

<script>
import Input from "../../components/Input";
import { addScore } from "../../api/requests";
import { mapState } from "vuex";

export default {
  name: "scores",
  layout: "graduate",
  components: Input,
  data() {
    return {
      userInput: {},
      toast: null,
    };
  },
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
        this.toats = res.message;
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