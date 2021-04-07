<template>
  <div class="g-dashboard">
            <LazyHydrate never >

    <DashboardHeader/>
                   </LazyHydrate>

    <section class="g-dashboard--middle">
       <LazyHydrate on-interaction="hover" >
      <BaseDashCard name="Cognizant News" :articles="cognizantTopics" />
     </LazyHydrate>
      <LazyHydrate  on-interaction="hover" >
      <BaseDashCard name="Tech News" :articles="techTopics" />
            </LazyHydrate>

    </section>
    <section class="g-dashboard--bottom">
          <LazyHydrate never >

   <TheCircleStudyTime :text="circle.text" />
               </LazyHydrate>

    </section>

  </div>
</template>

<script>
import { getNewsFromApi } from "../../api/newsApi/request";
import LazyHydrate from 'vue-lazy-hydration';
import { mapGetters } from "vuex";
export default {
  watchQuery: ["dashboard"],
  layout: "graduate",
  head() {
    return {
      title: "Dashboard",
    };
  },
  components: {
      LazyHydrate,
  BaseDashCard: ()=>import ("../../components/BaseDashCard"),
  TheCircleStudyTime: ()=>import ("../../components/Style/TheCircleStudyTime"),
  DashboardHeader:()=>import ("../../components/Style/DashboardHeader")
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
  },
  async mounted() {
    this.calculateCourseHours();
    try {
      const cognizant = await getNewsFromApi("Cognizant");
      const tech = await getNewsFromApi("Technology");

      this.cognizantTopics = cognizant.articles;
      this.techTopics = tech.articles;
    } catch (error) {
    /*   this.$toast("Something is wrong with our server! Try again later", {
        type: this.TOAST_ERROR,
      }); */
    }
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