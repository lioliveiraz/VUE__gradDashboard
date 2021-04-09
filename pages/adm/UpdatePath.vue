<template>
  <div class="g-update-path">
    <div v-if="getCourses && getAssessments" class="w-full">
      <LazyHydrate when-idle>
        <Courses :coursesArr="getCourses" :assessmentsArr="getAssessments" />
      </LazyHydrate>

      <div class="g-update-path-toggleButton">
        <LazyHydrate on-interaction="click">
          <BaseButton :handle-click="toggleComponent" :value="$t('ADD_NEW')" />
        </LazyHydrate>
      </div>
    </div>
    <div v-if="isFormOpen" class="g-update-path--form focus:outline-none">
      <div v-if="isFormOpen" class="g-update-path--overlay"></div>
      <LazyHydrate on-interaction>
        <AddNewCourseForm :toggle-component="toggleComponent" />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LazyHydrate from "vue-lazy-hydration";

export default {
  nuxtI18n: false,

  head() {
    return {
      title: "Update Path",
    };
  },
  middleware: "courses",
  components: {
    LazyHydrate,
    Courses: () => import("../../components/Courses/Courses"),
    AddNewCourseForm: () => import("../../components/Courses/AddNewCourseForm"),
    BaseButton: () => import("../../components/Style/BaseButton"),
  },
  layout: "graduate",
  data() {
    return {
      isFormOpen: false,
    };
  },
  computed: {
    ...mapGetters("courses", ["getCourses", "getAssessments"]),
  },
  mounted() {},
  methods: {
    toggleComponent() {
      this.isFormOpen = !this.isFormOpen;
    },
  },
};
</script>

<style >
</style>