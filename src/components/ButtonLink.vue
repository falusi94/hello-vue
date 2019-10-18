<template>
  <button class="button-link" @click="$emit('click')">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: [
    'title',
  ],
};
</script>

<style lang="scss" scoped>
  .button-link {
    padding: 1rem 1rem 0.5rem 1rem;
    font-size: inherit;
    font-weight: inherit;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:hover {
      transition-delay: 0.1s;
      transition-duration: 0.2s;
      border-bottom: 2px solid #FFF;
    }
  }
</style>
