<template>
  <button class="text-gray-100 h-12 md:m-4 font-bold p-2" @click="handleClick">
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