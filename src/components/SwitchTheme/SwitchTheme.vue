<template>
  <div class="box">
    <input
      id="switch-theme"
      type="checkbox"
      class="checkbox"
      v-bind:checked="themeLight"
      v-on:change="changeTheme()"
    />
    <label
      for="switch-theme"
      class="switcher"
      :class="{
        'bg-light': !themeLight,
      }"
    >
    </label>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { SET_THEME_LIGHT } from "../../core/vuex/modules/theme.module";

export default {
  setup() {
    const store = useStore();

    return {
      themeLight: computed(() => store.state.themeModule.themeLight),
      changeTheme: () =>
        store.dispatch(SET_THEME_LIGHT, !store.state.themeModule.themeLight),
    };
  },

  name: "SwitchTheme",
};
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.checkbox {
  display: none;
}

.checkbox:checked {
  ~ .switcher {
    &::after {
      top: calc(100% - 18px) !important;
      background: $amber;
    }
  }
}

.switcher {
  position: relative;
  padding: 10px;
  border-radius: 25px;
  background: $light;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: $amber;
    transition: all 300ms linear;
    box-shadow: 0 0 2px $coolGray;
  }
}

.theme-light {
  .checkbox {
    display: none;
  }

  .switcher {
    background: $coolGray;
  }
}
</style>