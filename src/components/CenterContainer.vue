<template>
  <div class="center-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CenterContainer',
};
</script>

<style lang="scss" scoped>
  .center-container {
    padding: 1.5rem 0.8rem;
    width: inherit;
    max-width: 768px;

    @media screen and (min-width: 768px) {
      margin: 0 auto;
    }
  }
</style>
