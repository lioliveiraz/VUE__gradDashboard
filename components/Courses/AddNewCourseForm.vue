<template>
  <div class="g-modal-form--inner focus:outline-none">
    <div class="border-blueGray-200 g-modal-form--header">
      <h3 class="g-color-adm-secondary">Update Path</h3>
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
              required: true
            }"
          />

          <BaseInput
            @getUserInput="getUserInput"
            :attributeObj="{
              type: this.TEXT_INPUT,
              name: this.COURSE_CODE_INPUT,
              required: true
            }"
          />

          <BaseInput
            @getUserInput="getUserInput"
            :attributeObj="{
              type: this.TEXT_INPUT,
              name: this.COURSE_NAME_INPUT,
              required: true
            }"
          />

          <BaseInput
            @getUserInput="getUserInput"
            :attributeObj="{
              type: this.TEXT_INPUT,
              name: this.TABLE_HEAD_SOURCE_ENGLISH,
              placeholder: 'Udemy or PluralSigh',
              required: true
            }"
          />

          <BaseInput
            @getUserInput="getUserInput"
            :attributeObj="{
              type: this.NUMBER_INPUT,
              name: this.TABLE_HEAD_DURATION_ENGLISH,
              required: true
            }"
          />

          <div class="g-checkbox-input--wrapper">
            <input
              name="assessment"
              type="checkbox"
              @change="getCheckboxInput"
              class="g-checkbox-input"
            />
            <label class="g-checkbox-label"> assessment </label>
          </div>

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
</template>

<script>
import { addCourse } from "../../api/requests/post";
import { mapGetters, mapActions } from "vuex";
import { formCoursesMixin } from "@/mixin/formCoursesMixin";

export default {
  mixins: [formCoursesMixin],
  components: {
    BaseInput: () => import("../BaseInput"),
    BaseButton: () => import("../../components/Style/BaseButton")
  },
  props: { toggleComponent: Function },

  computed: {
    ...mapGetters("auth", ["getToken"])
  },
  methods: {
    ...mapActions("courses", ["fetchCourses", "handleAddCourse"]),

    getCheckboxInput(e) {
      this.courseData["assessment"] = e.target.checked;
    },

    async handleSubmit(e) {
      e.preventDefault();
      this.courseData[this.DURATION_INPUT] = +this.courseData[
        this.DURATION_INPUT
      ];
      if (!this.isFormValid) return null;
      addCourse(this.courseData, this.getToken)
        .then(res => {
          this.toggleComponent();
          this.key = this.key + 1;
          this.handleAddCourse(this.courseData);
          this.$toast(res.data.message, { type: this.TOAST_SUCCESS });
        })
        .catch(err => {
          this.$toast(err.response.data.message, { type: this.TOAST_ERROR });
        });
    }
  }
};
</script>

<style scoped></style>
