<template>
  <button type="button" class="button" :class="computedClass" :style="computedStyle">
    <template v-if="!loading">
      <AppIcon v-if="icon" :icon="icon" :width="width" />
      <slot />
    </template>
    <template v-else>
      <AppCircleProgress :color="progressColor" class="button-progress" />
    </template>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import AppIcon from './AppIcon.vue';
import AppProgressCircle from './AppProgressCircle.vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'transparent'
  },
  icon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 1.5px solid;
  border-radius: $border-radius-rounded;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  gap: $spacer;
  padding: $spacer * 4 $spacer * 6;

  &.button-blue {
    background: $blue100;
    color: $white100;
    
    &:hover {
      background: $blueLight100;
    }
  }
}
</style>
