<template>
  <div class="main bg-gray-800">
    <div class="backDrop">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import "vue-toastification/dist/index.css";
import Vue from "vue";
import Toast from "vue-toastification";

Vue.use(Toast, {
  position: "top-right",
  newestOnTop: true,
  maxToasts: 3,
  pauseOnHover: true,
});
export default {};
</script>

<style >
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
nav {
  background: green;
  height: 10%;
}
footer {
  background: rgb(1, 1, 53);
  height: 20vh;
}
.main {
  height: 100vh;
  background-image: url("../assets/backgorund.jpg");
  background-size: cover;
}
.backDrop {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.692);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
