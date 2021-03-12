<template>
  <form @submit="handleSubmit" data-testId="course_form" :key="key">
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.NUMBER_INPUT,
        name: this.TABLE_HEAD_WEEK_ENGLISH,
        placeholder: 'week number',
        required: true,
      }"
    />
    {{ errors.week && errors.week }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.TABLE_HEAD_COURSECODE_ENGLISH,
        required: true,
      }"
    />
    {{ errors.course_code && errors.course_code }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.TABLE_HEAD_COURSENAME_ENGLISH,
        required: true,
      }"
    />
    {{ errors.course_name && errors.course_name }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.TABLE_HEAD_SOURCE_ENGLISH,
        placeholder: 'Udemy',
        required: true,
      }"
    />
    {{ errors.source && errors.source }}

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.NUMBER_INPUT,
        name: this.TABLE_HEAD_DURATION_ENGLISH,
        placeholder: '875463',
        required: true,
      }"
    />
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{ type: this.CHECKBOX_INPUT, name: this.ASSESSMENT_INPUT }"
    />
    <div class="flex">
      <input
        :type="this.BUTTON_SUBMIT"
        class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1"
      />
      <button
        @click="toggleComponent"
        class="bg-teal-500 text-gray-100 w-2/4 h-12 m-1"
      >
        Close
      </button>
    </div>
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
      courseData: {
        assessment: false,
        link:
          "https://giphy.com/gifs/makespace-cat-yoga-xUPGcyi4YxcZp8dWZq/tile",
      },
      errors: {},
      key: 0,
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  methods: {
    ...mapActions("courses", ["fetchCourses", "handleAddCourse"]),

    getUserInput(inputValue, inputName) {
      this.courseData[inputName] = inputValue;
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.courseData[this.DURATION_INPUT] = +this.courseData[
        this.DURATION_INPUT
      ];
      const errors = courseValidation(this.courseData);
      if (Object.entries(errors).length !== 0) {
        this.errors = errors;
      } else {
        addCourse(this.courseData, this.getToken)
          .then((res) => {
            this.errors = {};
            this.toggleComponent();
            this.key++;
            this.handleAddCourse(this.courseData);
            this.$toast(res.data.message, { type: this.TOAST_SUCCESS });
          })
          .catch((err) =>
            this.$toast(err.response.data.message, { type: this.TOAST_ERROR })
          );
      }
    },
  },
};
</script>

<style>
</style>