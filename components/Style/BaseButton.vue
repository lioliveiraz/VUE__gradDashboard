<template>
  <button class="g-button-base" @click="handleClick">
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