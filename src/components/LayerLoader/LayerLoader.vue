<template>
  <div class="layer-loader" :class="{'active' : preloaderModule.preloader, 'hidden' : !preloaderModule.preloader}"></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      preloaderModule: computed(() => store.state.preloaderModule),
    };
  },
  name: "LayerLoader",
};
</script>

<style lang="scss" scoped>
.layer-loader {
  background: $amber;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  transition: all 2s ease;

  &::after {
    content: "";
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $coolGray;

    transition: all 2s ease;
    transition-delay: 2s;
  }

  &.active {
    visibility: visible;
    opacity: 1;
    left: 0;

    &::after {
      top: 0;
    }
  }

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
}
</style>