<template>
  <header class="g-nav-wrapper">
    <div class="flex justify-between">
      <div
        @click="isMenu = !isMenu"
        :class="isMenu ? 'g-menu close ' : 'g-menu open '"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <a
        href="#"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
      >
        <button class="g-menu g-language-toggle">{{ locale.name }}</button>
      </a>
    </div>
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
          <li @click="isMenu = !isMenu">
            <nuxt-link :to="link.path"> {{ link.name }}</nuxt-link>
          </li>
        </div>
        <li>
          <BaseButton
            :value="$t('BUTTON_LOGOUT')"
            :handleClick="handlelogout"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from "../Style/BaseButton";

export default {
  props: { links: Array, username: String },
  components: {
    BaseButton,
  },
  data() {
    return {
      isMenu: false,
    };
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),

    handlelogout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>