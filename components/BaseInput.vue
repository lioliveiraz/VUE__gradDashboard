<template>
  <div class="g-base-input-wrapper">
    <label data-testId="label">{{
      attributeObj.label
        ? attributeObj.label.toUpperCase()
        : attributeObj.name.toUpperCase()
    }}</label>
    <input
      data-testId="input"
      v-border:[checkObjectEmpty]
      class = "g-base-input" 
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
import debounce from "lodash.debounce";

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
      if (!this.currentValue) return 0;
      else {
        return !isObjectEmpty(this.userError) ||
          !isObjectEmpty(this.courseError)
          ? 1
          : 2;
      }
    }
  },
  directives:{
    border:{
      update:function(el,binding){
      const isInputCorrect = binding.arg
      if(isInputCorrect ===1)  el.className=" g-base-input border-red-500" 
      else if(isInputCorrect ===2) el.className = " g-base-input border-green-500"
      else if(isInputCorrect===0) el.className = "g-base-input border-transparent"
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
    this.debouncedGetError = debounce(this.getErrorMessage, 1000);
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
