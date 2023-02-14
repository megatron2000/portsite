<template>
  <div class="app-progress-circle">
    <AppIcon class="app-progress-cirle-rotate" icon="progress-circle" :width="size" :height="size" />
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import AppIcon from './AppIcon.vue';

const props = defineProps({
  size: {
    type: String,
    default: '28px'
  },
  color: {
    type: String,
    default: 'white'
  }
});

const computedClass = computed(() => ({
  ['app-cirle-progress-' + props.color]: true
}));
</script>

<style lang="scss" scoped>
.app-progress-circle {
  display: flex;
  align-items: center;
  justify-content: center;

  &.app-progress-circle-white .app-progress-cirle-rotate {
    color: $white100;
  }

  //rotate animation is described in animation.scss
  .app-progress-cirle-rotate {
    animation: rotate 1s infinite ease;
  }
}
</style>
