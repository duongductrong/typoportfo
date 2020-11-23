<template>
  <div ref="refTree" class="timeline-tree">
    <div class="timeline">
      <h1 class="h3">{{ time }}</h1>
    </div>
    <div class="tree">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineTree",

  props: {
    time: {
      type: String,
      default: new Date().getFullYear(),
    },
  },

  methods: {
    focus() {
      return this.$refs.refTree;
    }
  }
  
};
</script>

<style lang="scss" scoped>
.timeline-tree {
  position: relative;
  display: flex;
  //   align-items: center;

  .timeline {
    text-align: right;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  .tree {
    margin-left: 1.5rem;
    border-left: 5px solid $light;
    min-height: 20vh;
  }
}

body.theme-light {
  .timeline-tree {
    .timeline {
    }

    .tree {
      border-left-color: $coolGray;
    }
  }
}
</style>