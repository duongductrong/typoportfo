<template>
  <div class="navbar">
    <router-link href="javascript:void(0)" to="/" class="brand">
      <span class="say">I am</span>
      <span class="im"> duongductrong06 💻 </span>
    </router-link>

    <div class="info">
      <router-link class="alink" href="javascript:void(0)" to="/about">About me〴</router-link>
      <a class="alink resume" href="#">Resume ⋰</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
</style>