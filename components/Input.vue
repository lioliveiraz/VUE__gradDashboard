<template>
  <div class="form--input flex flex-col m-3 w-5/6">
    <label data-testId="label">{{ attributeObj.name.toUpperCase() }}</label>
    <input
      data-testId="input"
      class="h-12 bg-gray-300 border-yellow-200 text-black"
      :type="attributeObj.type"
      :name="attributeObj.name"
      :placeholder="attributeObj.placeholder"
      autofocus
      v-model="currentValue"
      :required="attributeObj.required"
    />
  </div>
</template>

<script>
export default {
  props: ["attributeObj"],
  data() {
    return {
      currentValue: "",
    };
  },
  updated() {
    this.$emit("getUserInput", this.currentValue, this.attributeObj.name);
  },
};
</script>

<style>
.form--input label {
  font-weight: 700;
}
</style>