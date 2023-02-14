<template>
<div class="project">
  <div class="button-zaebis-wrapper">
    <AppButtonZaebis />
  </div>
  <div class="project-viewport">
    <div class="project-content-wrapper">
      <div class="project-title-wrapper">
        <span class="project-title"></span>
      </div>
      <div class="project-content">
        <div class="project-content-item-wrapper" v-for="projectContentItem in projectContentItems" :key="projectContentItem.id">
          <img class="project-content-item" src="#" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import AppButtonZaebis from '~/components/AppButtonZaebis.vue';
</script>

<style lang="scss" scoped>

</style>