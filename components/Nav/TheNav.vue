<template>
 
    
    <nav :class="+isMenu ? ' nav_open ' : ' nav_close '">
      <ul class="g-list">
        <li class="g-nav--profile">
          <div class="imageCenter">
            <img
              src="../../assets/profile.jpg"
              :alt="this.LOGO_IMAGE"
              :id="this.LOGO_IMAGE"
            />
          </div>
          <p>{{ $t("HELLO") }}, {{ username }}</p>
        </li>

        <div v-for="(link, index) of links" :key="index">
          <li @click="toggleMenu">
            <nuxt-link :to="link.path"> {{ link.name }}</nuxt-link>
          </li>
        </div>
        <li>
          <BaseButton
            :value="$t('BUTTON_LOGOUT')"
            :handleClick="handleLogout"
          />
        </li>
      </ul>
    </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: { links: Array, username: String ,isMenu:Boolean, toggleMenu:Function},
  components: {
    BaseButton:() =>import("../Style/BaseButton"),
 
  },
 
  methods: {
    ...mapActions("auth", ["logout"]),

    handleLogout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>