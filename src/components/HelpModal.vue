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
        <div class="card">
          <h2><InfoIcon />Apple</h2>
          <p>Click the &ldquo;Share&rdquo; button, and then &ldquo;Add To Home Screen&rdquo;.</p>
        </div>
        <div class="card">
          <h2><InfoIcon />Google</h2>
          <p>Click the &ldquo;Share&rdquo; button, and then &ldquo;Add To Home Screen&rdquo;.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

  import InfoIcon from './InfoIcon.vue'

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
    transform: rotate(-45deg) scale(80%);
    transition-duration: var(--duration), var(--duration), 0s;
    transition-property: transform, opacity, visibility;
    transition-timing-function: ease-in;

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

        .card {
          border: solid 1px var(--primary-dark);
          border-radius: 10px;
          padding: 1em;
          margin-bottom: 1em;

          h2 {
            display: flex;
            align-items: center;
            gap: 0.5em;
          }
        }
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
    transition-timing-function: ease-in;

  }

</style>
