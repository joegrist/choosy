<template>
  <div class="busy">
    <div class="dot"></div>
    &nbsp;
    <div class="dot"></div>
    &nbsp;
    <div class="dot"></div>
  </div>
</template>

<style scoped>

  .busy {

    display: flex;
    align-items: center;

    .dot {
      background-color: white;
      width: 0.25em;
      height: 0.25em;
      border-radius: 10px;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
    }

    .dot:nth-child(1) {
      animation-name: dot1;
    }

    .dot:nth-child(2) {
      animation-name: dot2;
    }

    .dot:nth-child(3) {
      animation-name: dot3;
    }

  }

  @keyframes dot1 {
    0% { opacity: 1; }
    20% { opacity: 0.5; }
    80% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @keyframes dot2 {
    0% { opacity: 0.5; }
    13% { opacity: 0.5; }
    33% { opacity: 1; }
    53% { opacity: 0.5; }
    100% { opacity: 0.5; }
  }

  @keyframes dot3 {
    0% { opacity: 0.5; }
    46% { opacity: 0.5; }
    66% { opacity: 1; }
    86% { opacity: 0.5; }
    100% { opacity: 0.5; }
  }

</style>
