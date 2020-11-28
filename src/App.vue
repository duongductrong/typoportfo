<template>
  <router-view />

  <layer-loader />

  <switch-theme />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import LayerLoader from "./components/LayerLoader/LayerLoader.vue";
import SwitchTheme from "./components/SwitchTheme/SwitchTheme.vue";

export default {
  setup() {
    const store = useStore();

    return {
      themeLight: computed(() => store.state.themeModule.themeLight),
    };
  },
  components: { LayerLoader, SwitchTheme },

  mounted() {
    if (this.themeLight) {
      document.body.classList.add("theme-light");
    } else {
      document.body.classList.remove("theme-light");
    }
  },
};
</script>

<style lang="scss">
@import "~@/styles/_resets.scss";
</style>
