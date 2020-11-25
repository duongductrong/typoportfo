<template>
  <div class="tree-item">
    <h6 class="h6 mb-1rem date">{{ date ?? "" }}</h6>
    <template v-if="href !== null">
      <a class="item-link" :href="href" target="_blank"><h1 class="h4 mb-1rem title">{{ title ?? "" }}</h1></a>
    </template>
    <template v-else>
      <h1 class="h4 mb-1rem title">{{ title ?? "" }}</h1>
    </template>
    <p class="h6 paragraph">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "TimelineItem",

  props: {
    date: String,
    title: String,
    href: {
      type: String,
      default: null
    }
  },
};
</script>

<style lang="scss" scoped>
.tree-item {
  position: relative;
  display: block;
  margin-bottom: 3rem;

  padding-left: 2rem;

  .date {
    font-weight: 300;
  }
  .title {
    font-weight: bold;
  }

  .item-link {
    text-decoration: dashed;
    text-decoration-color: $light;

    &:hover {
    }
  }

  .paragraph {
    color: rgba($color: $light, $alpha: 0.8);
  }

  &::before {
    content: "";
    position: absolute;
    left: -18px;
    width: 30px;
    height: 30px;
    background: $amber;
    border-radius: 50%;
  }
}

.theme-light {
  .paragraph {
    color: rgba($color: $coolGray, $alpha: 0.8);
  }
}
</style>