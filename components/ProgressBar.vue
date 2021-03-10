<template>
  <main>
    <svg :height="circle.size" :width="circle.size">
      <circle
        :cx="circle.size / 2"
        :cy="circle.size / 2"
        :r="circle.size / 2 - circle.strokeWidth / 2"
        :stroke="circle.strokeColor"
        :stroke-width="circle.strokeWidth"
        :stroke-dasharray="
          2 * Math.PI * (circle.size / 2 - circle.strokeWidth / 2)
        "
        fill="#e2e8f0"
      />
      <text class="svg--text" :x="circle.size / 2" :y="circle.size / 2">
        {{ circle.text }}h
      </text>
    </svg>
  </main>
</template>

<script>
export default {
  props: ["circle"],
};
</script>

<style scoped>
svg {
  animation: offsettozero 5s linear forwards;
  stroke-dashoffset: 439;
}
.svg--text {
  font-size: 3rem;
  text-anchor: middle;
  font-weight: bold;
  color: #38b2ac;
}

@keyframes offsettozero {
  to {
    stroke-dashoffset: 0;
  }
}
</style>