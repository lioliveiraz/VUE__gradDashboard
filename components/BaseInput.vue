<template>
  <div class="g-base-input-wrapper">
    <label data-testId="label">{{ attributeObj.name.toUpperCase() }}</label>
    <input
      data-testId="input"
      :class="
        checkObjectEmpty
          ? 'g-base-input border-green-400	'
          : 'g-base-input  border-red-500'
      "
      :type="attributeObj.type"
      :name="attributeObj.name"
      :placeholder="attributeObj.placeholder"
      autofocus
      v-model="currentValue"
      :required="attributeObj.required"
    />
    <p class="text-red-700 font-bold text-base">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { isObjectEmpty } from "@/helpers/service";
import { userValidation } from "@/helpers/validation";
import { courseValidation } from "../helpers/validation";
import _ from "lodash";
export default {
  props: { attributeObj: Object },
  data() {
    return {
      currentValue: "",
      userError: { initialError: "error" },
      courseError: { initialError: "error" },
      errorMessage: ""
    };
  },
  computed: {
    checkObjectEmpty() {
      if (!this.currentValue) return false;
      else {
        return !isObjectEmpty(this.userError) ||
          !isObjectEmpty(this.courseError)
          ? false
          : true;
      }
    }
  },
  watch: {
    currentValue: function() {
      let inputObj = {};
      inputObj = { [this.attributeObj.name]: this.currentValue };
      this.userError = userValidation(inputObj);
      this.courseError = courseValidation(inputObj);
      this.$emit("getUserInput", this.currentValue, this.attributeObj.name);
      this.debouncedGetError();
    }
  },
  created: function() {
    this.debouncedGetError = _.debounce(this.getErrorMessage, 800);
  },
  methods: {
    getErrorMessage() {
      this.errorMessage =
        this.userError[this.attributeObj.name] ||
        this.courseError[this.attributeObj.name];
    }
  }
};
</script>

<style></style>
