<template>
  <div class="navbar">
    <router-link to="/" class="brand">
      <span class="say">I am</span>
      <span class="im"> duongductrong06 💻 </span>
    </router-link>

    <div class="info">
      <a
        class="alink"
        href="javascript:void(0)"
        v-on:click="pushHistory('/about')"
        >About me〴</a
      >
      <a class="alink resume" href="#">Resume ⋰</a>
    </div>
  </div>
</template>

<script>
import { SET_PRELOADER } from "../../core/vuex/modules/preloader.module";

import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      preloaderStoreFunc: (v = false) => store.dispatch(SET_PRELOADER, v),
    };
  },

  name: "Navbar",

  methods: {
    pushHistory(path) {
      this.preloaderStoreFunc(true);

      setTimeout(() => {
        this.$router.push(path);
        this.preloaderStoreFunc(false);
      }, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0;

  .brand {
    text-decoration: none;

    span.say {
      font-weight: 500;
      font-size: 1.125rem;
    }
    span.im {
      cursor: default;
      color: $amber;
      font-weight: 700;
    }
  }

  .info {
    .alink {
      display: inline-block;
      position: relative;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        &::after {
          width: 50%;
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: $amber;
        transition: all 300ms linear;
      }
    }

    .resume {
      margin-left: 1rem;
      border: 1px dashed $amber;
      padding: 0.5rem 1rem;
      transition: all 300ms ease;
      &::after {
        content: none;
      }

      &:hover {
        background-color: $light;
        color: $amber;
      }
    }
  }
}

// @keyframes filled {
//   from {
//     bottom: -5px;
//     left: 0;
//     width: 0%;
//     height: 3px;
//   }
//   to {
//     bottom: 100%;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: $amber;
//   }
// }
</style>