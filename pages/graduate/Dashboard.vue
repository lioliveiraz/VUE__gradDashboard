<template>
  <div class="graduate--dashboard mt-16 xl:mt-10 xl:p-3">
    <section class="font-extrabold graduate--dashboard_top p-2">
      <div>
        <h1 class="text-3xl text-green-400 md:text-6xl">
          Welcome {{ getName }}
        </h1>
      </div>

      <img src="../../assets/hi.svg" alt="hi" />
    </section>

    <section class="graduate--dashboard_middle">
      <BaseDashCard name="Cognizant News" :articles="cognizantTopics" />
      <BaseDashCard name="Tech News" :articles="techTopics" />
    </section>

    <section class="graduate--dashboard_bottom">
      <div>
        <h3 class="text-teal-500 text-sm xl:text-4xl">Your study time</h3>
        <div
          class="circled-hours percentage"
        >
          {{ circle.text }}h
        </div>
      </div>
      <div>
        <h3 class="text-sm text-teal-500 xl:text-4xl">You accomplished</h3>
        <div
          class="circled-hours percentage"
        >
          {{ circle.text }}h
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseDashCard from "../../components/BaseDashCard";
import { getNewsFromApi } from "../../api/newsApi/request";

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
    try {
      const cognizant = await getNewsFromApi("Cognizant");
      const tech = await getNewsFromApi("Technology");

      this.cognizantTopics = cognizant.articles;
      this.techTopics = tech.articles;
    } catch (error) {
      this.$toast("Something is wrong with our server! Try again later", {
        type: this.TOAST_ERROR,
      });
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
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-button {
  display: none;
}
.graduate--dashboard {
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.graduate--dashboard_top {
  display: flex;
  min-height: 50vh;
  overflow: hidden;
}
.graduate--dashboard_top img {
  width: 50%;
}

.graduate--dashboard_top div:first-child {
  height: 70%;
  text-align: center;
  color: #00c300;
  align-self: center;
}
.graduate--dashboard_middle {
  background: whitesmoke;
  min-height: 50vh;
  width: 100%;
  color: antiquewhite;
  display: flex;
}
.graduate--dashboard_bottom {
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.graduate--dashboard_bottom div {
  margin: 5%;
}
.percentage {
  height: 150px;
  width: 150px;
  margin: 2%;
  background: white;
  border: 5px solid #00c300;
  font-size: 2rem;
  color: #00aaff;
}

@media screen and (min-width: 1200px) {
  .graduate--dashboard_top img {
    width: 60%;
  }
  .graduate--dashboard_middle {
    min-height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.circled-hours {
  @apply font-bold rounded-full bg-white flex items-center justify-center font-mono
}

</style>