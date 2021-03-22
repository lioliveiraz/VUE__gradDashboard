<template>
  <div>
    <div class="main--graduate flex">
      <TheNav :links="isAdm ? links_adm : links_grad" />

      <div class="bg-gray-200 graduate--content w-full h-full">
        <Nuxt />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "vue-toastification";
import global from "../mixin/global";
import TheNav from "../components/Nav/TheNav";
import TheFooter from "../components/Footer/TheFooter";
import { mapGetters } from "vuex";

Vue.mixin(global);

Vue.use(Toast, {
  position: "top-right",
  newestOnTop: true,
  maxToasts: 3,
  pauseOnHover: true,
});
export default {
  components: { TheNav, TheFooter },
  middleware: "courses",
  data() {
    return {
      links_grad: [
        {
          path: "dashboard",
          name: "home",
        },
        {
          path: "learningpath",
          name: "courses",
        },
        {
          path: "scores",
          name: "scores",
        },
      ],
      links_adm: [
        {
          path: "/adm/dashboard",
          name: "home",
        },
        {
          path: "/adm/registeremployee",
          name: "new employee",
        },
        {
          path: "/adm/updatepath",
          name: "new course",
        },
      ],
      displayADMLinks: this.isAdm,
    };
  },
  computed: {
    ...mapGetters("auth", ["isAdm"]),
  },
};
</script>
<style >
.main--graduate {
  background: white;
  height: 100vh;
  overflow-x: hidden;
}
.graduate--content {
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(102,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%2300c300'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(46,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2300aaff'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='10.23'%3E%3Cpath transform='translate(-12.25 2.8) rotate(1.75 1409 581) scale(1.007)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='3.4100000000000006' transform='translate(-7 7) rotate(2.1 800 450) scale(1.004)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(6.3 -21) rotate(21 401 736) scale(1.004)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='3.1'%3E%3Cpath transform='translate(42 -2.8) rotate(0.7 150 345) scale(0.993)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='6.820000000000001' transform='translate(-28 -17.5) rotate(25.2 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-42 14) rotate(4.2 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
}
.nav_close,
.nav_open {
  transition: all 0.5s ease-in-out;
}
.nav_open ul {
  opacity: 1;
  transition: all 0.1s 0.3s ease-in-out;
}
.nav_close ul {
  display: none;
  transition: all 0.1s ease-in-out;
}
.menu {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  outline: none;
  z-index: 99;
}
span {
  width: 70%;
  height: 3px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.548);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
}

.open span:nth-of-type(1) {
  transform: translateY(12px);
}
.open span:nth-of-type(3) {
  transform: translateY(-12px);
}

.close span:nth-of-type(1) {
  transform: rotate(-45deg) translate(-3px, 2px);
}
.close span:nth-of-type(2) {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.close span:nth-of-type(3) {
  transform: rotate(45deg) translate(-1px, -2px);
}
.imageCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-color: #00aaff;
}
ul {
  height: 80%;
}
li:first-child {
  margin-bottom: 50px;
}
li {
  text-transform: capitalize;
}
.logout {
  cursor: pointer;
  text-align: center;
  background: #00aaff;
}

a.nuxt-link-exact-active,
a:hover {
  color: #00c300;
}
button {
  text-transform: uppercase;
  color: white;
}

@media screen and (min-width: 1000px) {
  .graduate--content {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(102,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%2300c300'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(46,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2300aaff'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='6.93'%3E%3Cpath transform='translate(-66.5 15.2) rotate(9.5 1409 581) scale(1.038)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='2.3100000000000005' transform='translate(-38 38) rotate(11.4 800 450) scale(1.019)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(34.2 -114) rotate(114 401 736) scale(1.019)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='2.1'%3E%3Cpath transform='translate(228 -15.2) rotate(3.8 150 345) scale(0.962)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='4.620000000000001' transform='translate(-152 -95) rotate(136.8 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-228 76) rotate(22.8 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}
</style>
