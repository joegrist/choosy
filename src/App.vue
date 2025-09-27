<script setup lang="ts">

import { defineComponent } from 'vue';
import WineList from './components/WineList.vue';

defineComponent({
  name: 'App',
  components: {
    WineList
  }
});

</script>

<template>
  <WineList />
</template>

