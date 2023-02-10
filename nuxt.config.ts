// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~/assets/css/global.scss';`
        }
      }
    }
  }
});
