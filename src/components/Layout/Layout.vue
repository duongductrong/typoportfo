<template>
  <div id="layout">
    <!-- header -->
    <navbar></navbar>
    <!-- main -->
    <slot></slot>
    <!-- footer -->

    <!-- section list -->
    <section-list />
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import SectionList from "../SectionList/SectionList.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    SectionList,
  },
};
</script>

<style>
#layout {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
}

@media screen and (max-width: 1139px) {
  #layout {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>