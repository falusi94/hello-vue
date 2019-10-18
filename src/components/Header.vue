<template>
  <div class="header">
    <div class="header-placeholder" />
    <div class="header-content">
      <ButtonLink title="Home" @click="goHome" />
    </div>
  </div>
</template>

<script>
import ButtonLink from './ButtonLink.vue';

export default {
  name: 'Header',
  components: {
    ButtonLink,
  },
  methods: {
    goHome() {
      window.location = '/';
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    height: 3.5rem;
    width: 100%;
    color: #F5F5F5;
    font-size: 1rem;
    font-weight: 800;

    &-placeholder {
      width: inherit;
      height: inherit;
    }

    &-content {
      width: inherit;
      height: inherit;
      background-color: #212121;
      position: fixed;
      top: 0;
      padding: 0 2rem;
    }
  }
</style>
