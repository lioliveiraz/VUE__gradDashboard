<template>
  <button class="g-base-btn-blue" @click="handleClick">
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    handleClick: { type: Function, required: false },
    value: String,
  },
};
</script>

<style>
</style>