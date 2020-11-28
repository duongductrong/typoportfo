<template>
  <router-view />

  <layer-loader />

  <switch-theme />
</template>

<script>
import LayerLoader from "./components/LayerLoader/LayerLoader.vue";
import SwitchTheme from "./components/SwitchTheme/SwitchTheme.vue";

export default {
  components: { LayerLoader, SwitchTheme },
};
</script>

<style lang="scss">
@import "~@/styles/_resets.scss";
</style>
