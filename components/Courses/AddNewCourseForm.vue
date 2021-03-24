<template>
  <form @submit="handleSubmit" data-testId="course_form" :key="key">
    <h3
      class="text-green-900 font-bold text-2xl"
      data-testId="course_form-title"
    >
      Add new Course or Assessment
    </h3>
    <BaseInput
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.NUMBER_INPUT,
        name: this.TABLE_HEAD_WEEK_ENGLISH,
        placeholder: 'week number',
        required: true,
      }"
    />
    {{ errors.week && errors.week }}

    <BaseInput
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.COURSE_CODE_INPUT,
        required: true,
      }"
    />
    {{ errors.course_code && errors.course_code }}

    <BaseInput
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.COURSE_NAME_INPUT,
        required: true,
      }"
    />
    {{ errors.course_name && errors.course_name }}

    <BaseInput
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.TEXT_INPUT,
        name: this.TABLE_HEAD_SOURCE_ENGLISH,
        placeholder: 'Udemy',
        required: true,
      }"
    />
    {{ errors.source && errors.source }}

    <BaseInput
      @getUserInput="getUserInput"
      :attributeObj="{
        type: this.NUMBER_INPUT,
        name: this.TABLE_HEAD_DURATION_ENGLISH,
        placeholder: '875463',
        required: true,
      }"
    />
    <BaseInput
      @getUserInput="getUserInput"
      :attributeObj="{ type: this.CHECKBOX_INPUT, name: this.ASSESSMENT_INPUT }"
    />
    <div class="flex">
      <input :type="this.BUTTON_SUBMIT" class="g-base-btn-submit" />

      <BaseButton :handleClick="toggleComponent" value="close" />
    </div>
  </form>
</template>

<script>
import BaseInput from "../BaseInput";
import { addCourse } from "../../api/requests/post";
import { mapGetters, mapActions } from "vuex";
import { courseValidation } from "../../helpers/validation";
import BaseButton from "../../components/Style/BaseButton";

export default {
  components: { BaseInput, BaseButton },
  props: { toggleComponent: Function },

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

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form h3 {
  text-align: center;
}

@media screen and (min-width: 700px) {
  form {
    width: 70%;
  }
}
</style>