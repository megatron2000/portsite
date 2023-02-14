<template>
  <div class="projects">
    <div class="project-wrapper" v-for="project in Projects" :key="project.id">
      <Project />
    </div>
  </div>
</template>

<script setup>
import Project from '~/components/Project.vue';
</script>

<style lang="scss" scoped>

</style>