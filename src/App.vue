<template>
  <router-view />

  <layer-loader />
</template>

<script>
import LayerLoader from './components/LayerLoader/LayerLoader.vue';

export default {
  components: { LayerLoader },
};
</script>

<style lang="scss">
@import "~@/styles/_resets.scss";
</style>
