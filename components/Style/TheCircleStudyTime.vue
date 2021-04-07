<template>
      <div>
        <h3>Your study time</h3>
        <div class="circled-hours">{{ text }}h</div>
      </div>
</template>

<script>

export default{
      props: {
    text: Number,
  },
}
</script>