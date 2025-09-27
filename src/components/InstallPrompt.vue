<template>
  <div id="install-prompt">
    <div @click="help">
      <svg
        class="icon-download"
        viewBox="0 0 20 20"
      >
        <line
          x1="10"
          x2="10"
          y1="2"
          y2="12"
        />
        <line
          x1="5"
          x2="15"
          y1="15"
          y2="15"
        />
        <path
          d="M 5,7 L 10,12 15,7"
        />
      </svg>
      <div>Install as an app</div>
    </div>
    <svg
      viewBox="0 0 20 20"
      class="icon-close"
      @click="dismiss"
    >
      <line
        x1="5"
        y1="5"
        x2="15"
        y2="15"
      />
      <line
        x1="15"
        y1="5"
        x2="5"
        y2="15"
      />
    </svg>
  </div>
  <HelpModal @on-close="close" />
</template>

<script setup lang="ts">

  import HelpModal from './HelpModal.vue'

  function dismiss() {
    document.body.classList.toggle("install-prompt-dismissed", true)
  }

  function help() {
    document.body.classList.toggle("dialog", true)
  }

  function close() {
    document.body.classList.toggle("dialog", false)
  }

</script>

<style scoped>

  #install-prompt {

    --color: var(--primary-light);
    --color-dark: var(--primary-dark);

    display: flex;
    color: var(--color);
    flex-direction: row;
    gap: 1em;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: var(--color-dark);
    padding: 0.25em;
    border-radius: 10em;
    align-items: center;
    visibility: visible;
    transition-property: opacity, transform, visibility;
    transition-duration: var(--widget-transition-duration), var(--widget-transition-duration), var(--widget-transition-duration);
    transition-timing-function: ease-out;

    > div {

      display: flex;
      flex-direction: row;
      cursor: pointer;

      svg.icon-download {

        width: 20px;
        height: 20px;

        line, path {
          fill: none;
          stroke: var(--color);
          stroke-width: 1.4px;
        }
      }
    }

    svg.icon-close {

      width: 20px;
      height: 20px;
      transform: translateX(-5px);
      cursor: pointer;
      transition-duration: var(--widget-transition-duration), var(--widget-transition-duration), 0s;

      line {
        stroke: var(--color);
        stroke-width: 1.2px;
      }
    }
  }

</style>

<style>

  body.installed, body.install-prompt-dismissed {
    #install-prompt {
      opacity: 0;
      transform: translateY(-10px);
      visibility: hidden;
    }
  }

</style>
