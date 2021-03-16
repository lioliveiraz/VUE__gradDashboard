<template>
  <div class="w-3/6 m-2 p-2 card border-gray-200 border-2">
    <img src="../assets/graph.svg" alt="graph " class="md:m-4" />
    <p class="name xl:text-3xl">{{ name }}</p>

    <div class="card-content m-2 text-xs md:text-2xl w-10/12">
      <p class="m-2 md:mt-4">Dolor sit amet elit.</p>
      <p class="m-2 md:mt-4">Dit amet doloripsum.</p>
      <p class="m-2 md:mt-4">Dit amet doloripsum.</p>

      <button class="text-gray-100 min-h-8 mt-2 p-1 md:mt-4">More</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
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
  margin: 2%;
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
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .card-content button {
    width: 50%;
    align-self: center;
  }
}
</style>