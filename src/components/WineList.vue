<template>
  <main>
    <InstallPrompt />
    <div class="background">
      <BottleGraphic />
    </div>
    <div>
      <h1>
        <span>
          {{ choice.text }}
        </span>
      </h1>
      <div v-if="error.length > 0">
        {{ error }}
      </div>
    </div>
    <button
      :disabled="disabled"
      @click="choose"
    >
      <span v-if="!disabled">{{ label }}</span>
      <BusyGraphic v-if="disabled"/>
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
  import BusyGraphic from './BusyGraphic.vue'

  const logger = new Logger()
  let choices = new Choices(logger)
  const labels = new Labels(logger)
  const choice = ref<Choice>(blankChoice)
  let animation: Animation
  const disabled = ref<boolean>(true)
  const error = ref<string>('')
  const label = ref<string>(Conf.strings.busy)

  async function startup() {

    try {
      choices = await Choices.fetch(logger)
    } catch (e) {
      error.value = (e as Error).message ?? e;
      console.log(e)
    }

    logger.log(`${choices.choices.length} choices loaded to page state`)
    animation = new Animation(choices, choice, logger)
    choice.value = choices.mock(Conf.strings.ready)
    label.value = Conf.labels[0]
    disabled.value = false
  }

  onMounted(async () => {
    startup()
  })

  async function choose() {
    disabled.value = true
    await animation.animate()
    logger.log("Animation Done")
    label.value = labels.choose()
    disabled.value = false
  }

</script>

<style scoped>

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

  main {

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

    button {
      border-width: 0px;
      border-radius: 2em;
      padding: 0.5em 2em;
      cursor: pointer;
      font-size: var(--button-font-size);
      background-color: var(--secondary);
      color: var(--primary-dark);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:active {
        background-color: var(--secondary-light);
      }

      &:disabled {
        background-color: var(--secondary-translucent);
      }
    }

    > div {

      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      text-align: center;

      > h1 {
        font-size: var(--heading-font-size);
      }
    }
  }

</style>
