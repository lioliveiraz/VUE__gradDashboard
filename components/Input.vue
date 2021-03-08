<template>
  <div>
    <label>{{ attributeObj.name }}</label>
    <input
      :type="attributeObj.type"
      :name="attributeObj.name"
      :placeholder="attributeObj.placeHolder"
      autofocus
      v-model="currentValue"
      required
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
</style>