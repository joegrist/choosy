<template>
  <main>
    <div class="background">
      <BottleGraphic />
    </div>
    <div>
      <h1>
        <span v-if="choice.text.length > 0">
          {{ choice.text }}
        </span>
        <span v-if="status != Conf.strings.ok">
          {{ status }}
        </span>
      </h1>
      <InstallPrompt />
    </div>
    <button
      :disabled="disabled"
      @click="choose"
    >
      {{ label }}
    </button>
  </main>
</template>

<script setup lang="ts">

  import { ref } from 'vue'
  import { onMounted } from 'vue'
  import { Choices, type Choice, blankChoice, Labels } from '../lib/choosy'
  import { Animation } from '../lib/animation'
  import { Conf } from '../lib/conf'
  import { Logger } from '@/lib/logger'
  import BottleGraphic from './BottleGraphic.vue'
  import InstallPrompt from './InstallPrompt.vue'

  const logger = new Logger()
  let choices = new Choices(logger)
  const labels = new Labels(logger)
  const choice = ref<Choice>(blankChoice)
  let animation: Animation
  const disabled = ref<boolean>(true)
  const status = ref<string>(Conf.strings.loading)
  const label = ref<string>(Conf.strings.busy)

  async function startup() {
    choices = await Choices.fetch(logger)
    logger.log(`${choices.choices.length} choices loaded to page state`)
    animation = new Animation(choices, choice, logger)
    status.value = Conf.strings.ready
    label.value = Conf.labels[0]
    disabled.value = false
  }

  onMounted(async () => {
    startup()
  })

  async function choose() {
    disabled.value = true
    status.value = Conf.strings.ok
    label.value = Conf.strings.busy
    await animation.animate()
    logger.log("Animation Done")
    label.value = labels.choose()
    disabled.value = false
  }

</script>

<style scoped>

  #app {

    display: flex;
    flex-grow: 1;
    flex-direction: column;
    position: relative;

    .background {

      position: absolute;
      box-sizing: border-box;
      z-index: -1;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      display: flex;
      align-items: stretch;
      justify-content: center;


    }

    > main {

      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1em;
      align-items: center;
      margin-top: var(--pad-n);
      margin-bottom: var(--pad-s);
      margin-left: var(--pad-w);
      margin-right: var(--pad-e);
      position: relative;

      > div {

        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;

        > h1 {
          font-size: var(--heading-font-size);
          text-align: center;
        }
      }
    }
  }

</style>
