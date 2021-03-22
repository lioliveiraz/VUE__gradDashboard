<template>
  <div class="w-3/6 m-2 p-2 card border-gray-200 border-2 shadow-lg">
    <img src="../assets/graph.svg" alt="graph " class="md:m-4" />
    <p class="name xl:text-3xl">{{ name }}</p>

    <div class="card-content text-xs md:text-2xl p-3 align-center">
      <p class="md:mt-4">Dolor sit amet elit.</p>
      <p class="md:mt-4">Dit amet doloripsum.</p>
      <p class="md:mt-4">Dit amet doloripsum.</p>

      <BaseButton value="more" :handleClick="m" />
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/Style/BaseButton";

export default {
  props: {
    name: String,
  },
  components: {
    BaseButton,
  },
  methods: {
    m() {},
  },
};
</script>

<style scoped>
.card {
  background: white;
  position: relative;
  bottom: 15%;
  height: 90%;
  display: flex;
  flex-direction: column;
  color: #26a826;
}
.name {
  text-align: center;
}
.card img {
  height: 15%;
}
.card-content {
  height: 100%;
}
.card-content p {
  width: 100%;
  min-height: 50px;
  color: black;
  border-bottom: 1px solid black;
}

.card-content button {
  background: #00aaff;
  width: 100%;
}

@media screen and (min-width: 700px) {
  .card img {
    height: 20%;
  }
}
@media screen and (min-width: 1200px) {
  .card {
    width: 29%;
    bottom: 10%;

    margin-left: 4%;
  }
  .card-content {
    height: 100%;

    display: flex;
    flex-direction: column;
  }
  .card-content button {
    width: 50%;
    align-self: center;
  }
}
</style>