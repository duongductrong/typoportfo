<template>
  <router-view />

  <layer-loader />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import LayerLoader from "./components/LayerLoader/LayerLoader.vue";

export default {
  setup() {
    const store = useStore();

    return {
      isLight: computed(() => store.state.themeModule.themeLight),
    };
  },
  components: { LayerLoader },

  mounted() {
    if (this.isLight) {
      // set theme light
      document.body.classList.add("theme-light");
    } else {
      // un-set theme light
      document.body.classList.remove("theme-light");
    }
  },
};
</script>

<style lang="scss">
@import "~@/styles/_resets.scss";
</style>
