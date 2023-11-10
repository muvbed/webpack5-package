<template>
  <section class="vue-page">
    <h2 class="vue-page__title">Vue 3 Modules</h2>
    <img
      svg-inline
      svg-sprite
      src="@/assets/icons/vue-logo.svg"
      class="vue-page__img"
      alt="SVG icon"
    />
    <Module />
  </section>
</template>

<script>
import Module from "@/vue/components/Module.vue";

export default {
  components: {
    Module,
  },
};
</script>

<style lang="scss" scoped>
.vue-page {
  &__title {
    color: rgb(0, 100, 0);
  }

  &__img {
    width: 300px;
  }
}
</style>
