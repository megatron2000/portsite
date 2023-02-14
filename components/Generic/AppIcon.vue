<template>
  <svg class="app-icon" :style="dimensions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor">
    <use :href="symbolId" fill="currentColor" />
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#030809'
  },
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  }
});

const dimensions = computed(() => ({
  width: props.width,
  height: props.height
}));

const symbolId = computed(() => `#icon-${props.icon}`);
</script>

<style lang="scss" scoped>
.app-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  user-select: none;
}
</style>
