<template>
      <div>
        <h3>{{ $t("STUDY_TIME") }}</h3>
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