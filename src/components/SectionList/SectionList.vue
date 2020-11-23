<template>
  <div class="section-list">
    <a href="javascript:void(0)" v-on:click="scrollToTop(null)" class="active"
      >〴 Myself</a
    >
    <a href="javascript:void(0)" v-on:click="scrollToTop('#timeline-works')"
      >Work</a
    >
    <a href="javascript:void(0)" v-on:click="scrollToTop('#expertise')"
      >Expertise</a
    >
  </div>
</template>

<script>
export default {
  name: "SectionList",

  methods: {
    scrollToTop(el = "") {
      let index = 0;
      if (el) {
        index = document.querySelector(el).offsetTop - 100;
      }
      window.scrollTo({
        top: index,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section-list {
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    // writing-mode: vertical-lr;
    margin-right: 1rem;
    padding: 0.5rem;
    text-transform: uppercase;
    // transform: rotate(290deg);

    &:last-child {
      margin-right: 0;
    }

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: $amber;
      transition: all 300ms ease-in-out;
    }

    &:hover {
      color: $coolGray;
      &::before {
        width: 100%;
      }
    }

    &.active {
      // color: $coolGray;
      &::before {
        // width: 100%;
        // height: 100%;
      }
    }
  }
}
</style>