<template>
  <div class="g-base-input-wrapper">
    <label data-testId="label">{{ attributeObj.name.toUpperCase() }}</label>
    <input
      data-testId="input"
      class="g-base-input"
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
  props: { attributeObj: Object },
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