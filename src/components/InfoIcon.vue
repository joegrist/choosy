<template>
  <svg
    viewbox="0 0 20 20"
  >
    <circle
      class="border"
      cx="10"
      cy="10"
      r="9"
    />

    <circle
      class="dot"
      cx="10"
      cy="6"
      r="1.2"
    />

    <line
      x1="10"
      y1="9"
      x2="10"
      y2="16"
    />

  </svg>
</template>

<style scoped>

  svg {
    width: 20px;
    height: 20px;

    circle.border, line {
      fill: white;
      stroke-width: 2px;
      stroke: var(--primary);
    }

    line {
      stroke-width: 2px;
    }

    circle.dot {
      fill: var(--primary);
    }
  }

</style>
