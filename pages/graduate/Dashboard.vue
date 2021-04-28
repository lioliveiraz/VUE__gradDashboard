<template>
  <div class="g-dashboard">
    <section class="g-dashboard-stats">
      <LazyHydrate never>
        <BaseStats
          :title="$t('STUDY_TIME')"
          :value="calculateCourseHours + 'h'"
        />
      </LazyHydrate>
      <LazyHydrate never>
        <BaseStats
          :title="$t('AVERAGE_SCORE')"
          :value="calculatedScores"
          code=""
        />
      </LazyHydrate>
    </section>
    <section class="g-dashboard--middle">
      <LazyHydrate on-interaction="hover">
        <BaseDashCard
          :name="$t('COGNIZANT_NEWS')"
          :articles="cognizantTopics"
        />
      </LazyHydrate>
      <LazyHydrate on-interaction="hover">
        <BaseDashCard :name="$t('TECH_NEWS')" :articles="techTopics" />
      </LazyHydrate>
    </section>
  </div>
</template>

<script>
import { getNewsFromApi } from "../../api/newsApi/request";
import LazyHydrate from "vue-lazy-hydration";
import { mapGetters } from "vuex";

export default {
  nuxtI18n: false,

  watchQuery: ["dashboard"],
  layout: "dash_layout",
  head() {
    return {
      title: "Dashboard"
    };
  },
  components: {
    LazyHydrate,
    BaseDashCard: () => import("../../components/BaseDashCard"),
    TheCircleStudyTime: () =>
      import("../../components/Style/TheCircleStudyTime"),
    BaseStats: () => import("../../components/Style/BaseStats")
  },
  data() {
    return {
      courses: [],
      cognizantTopics: [],
      techTopics: [],
      language: this.$i18n.locale
    };
  },
  layout: "dash_layout",

  computed: {
    ...mapGetters("courses", ["getCourses", "getScores"]),
    calculateCourseHours() {
      return this.getCourses.reduce((acc, cur) => {
        return acc + +cur.duration;
      }, 0);
    },
    calculatedScores() {
      if (this.getScores.length === 0) return "0";
      const sum = this.getScores.reduce((acc, cur) => {
        return acc + +cur.score;
      }, 0);

      return Math.floor(sum / this.getScores.length).toString();
    }
  },

  async created() {
    try {
      const cognizant = await getNewsFromApi("Cognizant", this.language);
      const tech = await getNewsFromApi("Technology", this.language);
      console.log(cognizant);
      this.cognizantTopics = cognizant.articles;
      this.techTopics = tech.articles;
    } catch (error) {
      this.$toast("Something is wrong with our server! Try again later", {
        type: this.TOAST_ERROR
      });
    }
  }
};
</script>

<style scoped></style>
