<template>
  <div class="g-dashboard">
    <section class="g-dashboard--top">
      <h1>{{ $t("welcome") }}, {{ getName }}!</h1>

      <img src="../../assets/hi.svg" alt="hi" />
    </section>

    <section class="g-dashboard--middle">
      <!--  <BaseDashCard :name="$t('COGNIZANT_NEWS')" :articles="cognizantTopics" />
      <BaseDashCard :name="$t('TECH_NEWS')" :articles="techTopics" /> -->
    </section>

    <section class="g-dashboard--bottom">
      <div>
        <h3>{{ $t("STUDY_TIME") }}</h3>
        <div class="circled-hours">{{ circle.text }}h</div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseDashCard from "../../components/BaseDashCard";
import { getNewsFromApi } from "../../api/newsApi/request";

import { mapGetters } from "vuex";
export default {
  nuxtI18n: false,

  watchQuery: ["dashboard"],
  layout: "graduate",
  head() {
    return {
      title: "Dashboard",
    };
  },
  components: {
    BaseDashCard,
  },
  data() {
    return {
      circle: {
        text: 0,
      },
      courses: [],
      cognizantTopics: [],
      techTopics: [],
    };
  },
  layout: "graduate",

  computed: {
    ...mapGetters("courses", ["getCourses", "getScores"]),
    ...mapGetters("auth", ["getName"]),
  },
  async mounted() {
    this.calculateCourseHours();
    /*     try {
      const cognizant = await getNewsFromApi("Cognizant");
      const tech = await getNewsFromApi("Technology");

      this.cognizantTopics = cognizant.articles;
      this.techTopics = tech.articles;
    } catch (error) {
      this.$toast("Something is wrong with our server! Try again later", {
        type: this.TOAST_ERROR,
      });
    } */
  },

  methods: {
    calculateCourseHours() {
      this.circle.text = this.getCourses.reduce((acc, cur) => {
        return acc + +cur.duration;
      }, 0);
    },
  },
};
</script>

<style scoped>
</style>