<template>
  <div class="modal">
    <div>
      <header>
        <h1>Install</h1>
        <svg
          viewbox="0 0 40 40"
          @click="close"
        >
          <path d="M 10,10 L 30,30  M 10,30 L 30,10" />
        </svg>
      </header>

      <main>
        <InfoCard title="Apple / Safari">Use the &ldquo;Share&rdquo; button, and then select &ldquo;Add To Home Screen&rdquo;.</InfoCard>
        <InfoCard title="Google / Chrome">Use the ellipsis(&hellip;) button, then select &ldquo;Add To Home Screen&rdquo;.</InfoCard>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

  import InfoCard from './InfoCard.vue'

  const emit = defineEmits(['onClose'])

  function close() {
    emit('onClose')
  }

</script>

<style scoped>

  .modal {

    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    transform-origin: 0% 100%;
    transform: rotate(-20deg) scale(80%) translateY(-100px);
    transition-duration: var(--widget-transition-duration);
    transition-property: transform, opacity, visibility;
    transition-timing-function: var(--timing-end-slow) var(--timing-end-fast) linear;

    h1 {
      font-weight: 400;
    }

    > div {
      padding: var(--edge-padding);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 10px;
      visibility: visible;
      gap: 1em;

      header {

        display: flex;
        align-items: center;

        h1 {
          flex-grow: 1;
        }

        svg {

          width: 40px;
          height: 40px;
          cursor: pointer;
          transform: translateX(10px);

          path {
            fill: none;
            stroke: var(--primary);
            stroke-width: 1px;
          }
        }
      }

      > main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
    }
  }

</style>

<style>

  body.dialog .modal {
    opacity: 1;
    transform: none;
    visibility: visible;
    color: var(--primary);
    transition-timing-function: var(--timing-bounce);
    transition-duration: var(--modal-transition-duration);
  }

</style>
