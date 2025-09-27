<template>
  <div class="card">
    <h2><InfoIcon />{{ title }}</h2>
    <p><slot /></p>
  </div>
</template>

<script lang="ts" setup>

  import InfoIcon from './InfoIcon.vue'

  defineProps<{
    title?: string
  }>()

</script>

<style scoped>
  .card {
    background-color: var(--secondary-light);
    border-radius: 10px;
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 1em;

    h2 {
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-weight: 500;
    }

    p {
      margin: 0px;
    }
  }
</style>
