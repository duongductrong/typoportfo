<template>
  <div
    class="layer-loader"
    :class="{
      active: preloader,
    }"
  ></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      preloader: computed(() => store.state.preloaderModule.preloader),
    };
  },
  name: "LayerLoader",
};
</script>

<style lang="scss" scoped>
// We have 1.5 second to loading and 1.5 second to hide
// Inside loading we can custom before, after transition between 3 second
.layer-loader {
  visibility: hidden;
  opacity: 1;
  background: $amber;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 1.5s ease;
  overflow: hidden;

  clip-path: circle(0% at 50% 50%);

  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: $coolGray;

    transition: all 1.5s ease;
    transition-delay: 0.5s;
  }

  &::after {
    content: "Stay here.";
    white-space: nowrap;
    font-weight: bold;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0rem;
    color: $amber;

    text-transform: uppercase;
    transform-origin: center;
    transition: all 500ms linear;
    transition-delay: 0.5s;
  }

  &.active {
    visibility: visible;
    width: 100%;
    clip-path: circle(100% at 50% 50%);
    opacity: 1;

    &::before {
      top: 0;
    }

    &::after {
      visibility: visible;
      font-size: 2.5rem;
    }
  }
}

.theme-light {
  .layer-loader {
    background: $coolGray;

    &::before {
      background: $orange;
    }

    &::after {
    }
  }
}
</style>