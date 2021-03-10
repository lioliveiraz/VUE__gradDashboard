<template>
  <form @submit="handleSubmit">
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'number',
        name: 'week',
        placeholder: 'week number',
        required: true,
      }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'text', name: 'course_code', required: true }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'text', name: 'course_name', required: true }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'checkbox', name: 'assessment' }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'text',
        name: 'source',
        placeholder: 'Udemy',
        required: true,
      }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'number',
        name: 'duration',
        placeholder: '875463',
        required: true,
      }"
    />
    <input type="submit" />
  </form>
</template>

<script>
import Input from "../Input";
import { addCourse } from "../../api/requests";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Input },
  props: ["changeKey"],

  data() {
    return {
      courseData: {
        assessment: false,
        link:
          "https://giphy.com/gifs/makespace-cat-yoga-xUPGcyi4YxcZp8dWZq/tile",
      },
    };
  },
  computed: {
    ...mapGetters("auth", ["token"]),
  },
  methods: {
    ...mapActions("courses", ["fetchCourses"]),

    getUserInput(inputValue, inputName) {
      this.courseData[inputName] = inputValue;
    },
    async handleSubmit(e) {
      e.preventDefault();
      addCourse(this.courseData, this.token)
        .then((res) => {
          this.fetchCourses({ token: this.token });
        })
        .then((res) => this.changeKey())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>