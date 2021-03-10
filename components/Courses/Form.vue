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
    {{ errors.week && errors.week }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'text', name: 'course_code', required: true }"
    />
    {{ errors.course_code && errors.course_code }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'text', name: 'course_name', required: true }"
    />
    {{ errors.course_name && errors.course_name }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'text',
        name: 'source',
        placeholder: 'Udemy',
        required: true,
      }"
    />
    {{ errors.source && errors.source }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'number',
        name: 'duration',
        placeholder: '875463',
        required: true,
      }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: 'checkbox', name: 'assessment' }"
    />

    <input type="submit" class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1" />
  </form>
</template>

<script>
import Input from "../Input";
import { addCourse } from "../../api/requests/post";
import { mapGetters, mapActions } from "vuex";
import { courseValidation } from "../../helpers/validation";

export default {
  components: { Input },
  props: ["toggleComponent"],

  data() {
    return {
      props: ["c"],
      courseData: {
        assessment: false,
        link:
          "https://giphy.com/gifs/makespace-cat-yoga-xUPGcyi4YxcZp8dWZq/tile",
      },
      errors: {},
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  methods: {
    ...mapActions("courses", ["fetchCourses"]),

    getUserInput(inputValue, inputName) {
      this.courseData[inputName] = inputValue;
    },
    async handleSubmit(e) {
      e.preventDefault();
      const errors = courseValidation(this.courseData);
      if (Object.entries(errors).length !== 0) {
        this.errors = errors;
      } else {
        addCourse(this.courseData, this.getToken)
          .then((res) => {
            console.log("before calling fetch");
            this.fetchCourses({ token: this.getToken });
            this.toggleComponent();
            this.$toast(res.data.message, { type: "success" });
          })
          .catch((err) =>
            this.$toast(err.response.data.message, { type: "error" })
          );
      }
    },
  },
};
</script>

<style>
</style>