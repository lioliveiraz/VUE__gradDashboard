<template>
  <div class="relative w-auto my-6 mx-auto h-auto">
    <div class="g-modal-form--inner focus:outline-none">
      <div class="border-blueGray-200 g-modal-form--header">
        <h3 data-testId="course_form-title">Update Path</h3>
      </div>
      <div class="g-modal-form--content">
        <form @submit="handleSubmit" data-testId="course_form" :key="key">
          <div>
            <BaseInput
              @getUserInput="getUserInput"
              :attributeObj="{
                type: this.NUMBER_INPUT,
                name: this.TABLE_HEAD_WEEK_ENGLISH,
                placeholder: 'week number',
                required: true,
              }"
            />

            <BaseInput
              @getUserInput="getUserInput"
              :attributeObj="{
                type: this.TEXT_INPUT,
                name: this.COURSE_CODE_INPUT,
                required: true,
              }"
            />

            <BaseInput
              @getUserInput="getUserInput"
              :attributeObj="{
                type: this.TEXT_INPUT,
                name: this.COURSE_NAME_INPUT,
                required: true,
              }"
            />

            <BaseInput
              @getUserInput="getUserInput"
              :attributeObj="{
                type: this.TEXT_INPUT,
                name: this.TABLE_HEAD_SOURCE_ENGLISH,
                placeholder: 'Udemy',
                required: true,
              }"
            />

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
              :attributeObj="{
                type: this.CHECKBOX_INPUT,
                name: this.ASSESSMENT_INPUT,
              }"
            />

            <div class="g-addNewcourse-buttons">
              <input
                type="submit"
                value="Send"
                :class="
                  isFormValid ? 'g-base-btn-blue' : 'g-base-btn-blue g-disabled'
                "
                :disabled="!isFormValid"
              />
              <BaseButton :handleClick="toggleComponent" value="close" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../BaseInput";
import { addCourse } from "../../api/requests/post";
import { mapGetters, mapActions } from "vuex";
import { courseValidation } from "../../helpers/validation";
import BaseButton from "../../components/Style/BaseButton";
import { isObjectEmpty, isObjectValuesEmpty } from "../../helpers/service";

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
      key: 0,
      isFormValid: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getToken"]),
  },
  methods: {
    ...mapActions("courses", ["fetchCourses", "handleAddCourse"]),

    formValidation() {
      const errors = courseValidation(this.courseData);
      this.isFormValid = isObjectEmpty(errors);
    },
    getUserInput(inputValue, inputName) {
      this.courseData[inputName] = inputValue;
      if (
        !isObjectEmpty(this.courseData) &&
        isObjectValuesEmpty(this.courseData).length === 7
      ) {
        this.formValidation();
      } else {
        this.isFormValid = false;
      }
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.courseData[this.DURATION_INPUT] = +this.courseData[
        this.DURATION_INPUT
      ];
      if (!this.isFormValid) return null;
      addCourse(this.courseData, this.getToken)
        .then((res) => {
          this.errors = {};
          this.toggleComponent();
          this.key = this.key + 1;
          this.handleAddCourse(this.courseData);
          this.$toast(res.data.message, { type: this.TOAST_SUCCESS });
        })
        .catch((err) =>
          this.$toast(err.response.data.message, { type: this.TOAST_ERROR })
        );
    },
  },
};
</script>

<style scoped>
</style>