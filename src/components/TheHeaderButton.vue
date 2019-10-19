<template>
  <BaseButton
    class="header-button"
    @click="$emit('click')"
    :title="title"
  />
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'TheHeaderButton',
  components: {
    BaseButton,
  },
  props: [
    'title',
  ],
};
</script>

<style lang="scss" scoped>
  .header-button {
    &:hover {
      transition-delay: 0.1s;
      transition-duration: 0.2s;
      border-bottom: 2px solid #FFF;
    }
  }
</style>
