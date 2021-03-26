<template>
  <div class="g-dashbord-card">
    <img src="../assets/graph.svg" alt="graph " />
    <p>{{ name }}</p>

    <div
      v-for="(article, index) of articles"
      :key="index"
      class="g-dashboard-card--content"
    >
      <a :href="article.url">
        <p class="g-article-title">{{ article.title }}</p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    articles: Array,
  },
};
</script>

<style scoped>
</style>