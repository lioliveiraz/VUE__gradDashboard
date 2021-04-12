<template>
  <div class="g-dashboard">
    <LazyHydrate never>
      <DashboardHeader />
    </LazyHydrate>

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

    <section class="g-dashboard--bottom">
      <LazyHydrate never>
        <TheCircleStudyTime :text="calculateCourseHours" />
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
      title: "Dashboard",
    };
  },
  components: {
    LazyHydrate,
    BaseDashCard: () => import("../../components/BaseDashCard"),
    TheCircleStudyTime: () =>
      import("../../components/Style/TheCircleStudyTime"),
    DashboardHeader: () => import("../../components/Style/DashboardHeader"),
  },
  data() {
    return {
      courses: [],
      cognizantTopics: [],
      techTopics: [],
      language: this.$i18n.locale,
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
  },

  async created() {
    try {
      const cognizant = await getNewsFromApi("Cognizant", this.language);
      const tech = await getNewsFromApi("Technology", this.language);

      this.cognizantTopics = cognizant.articles;
      this.techTopics = tech.articles;
    } catch (error) {
      this.$toast("Something is wrong with our server! Try again later", {
        type: this.TOAST_ERROR,
      });
    }
  },
};
</script>

<style scoped>
</style>