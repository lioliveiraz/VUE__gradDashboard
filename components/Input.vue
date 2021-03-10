<template>
  <div class="form--input flex flex-col m-2 w-5/6">
    <label>{{ attributeObj.name.toUpperCase() }}</label>
    <input
      class="h-12 bg-gray-300 border-yellow-200"
      :type="attributeObj.type"
      :name="attributeObj.name"
      :placeholder="attributeObj.placeHolder"
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