<template>
  <button
    class="base-button"
    @click="$emit('click')">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: [
    'title',
  ],
};
</script>

<style lang="scss" scoped>
  .base-button {
    padding: 1rem 1rem 0.5rem 1rem;
    font-size: inherit;
    font-weight: inherit;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
</style>
