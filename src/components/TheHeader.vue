<template>
  <div class="header">
    <div class="header-placeholder" />
    <div class="header-content">
      <TheHeaderButton
        title="Home"
        @click="goHome"
      />
    </div>
  </div>
</template>

<script>
import TheHeaderButton from './TheHeaderButton.vue';

export default {
  name: 'TheHeader',
  components: {
    TheHeaderButton,
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
