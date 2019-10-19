<template>
  <a
    class="base-link"
    @click="$emit('click')">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
};
</script>

<style lang="scss" scoped>
  .base-link {
    &, &:link, &:visited, &:hover, &:active {
      text-decoration: none;
    }

    &, &:link {
      color: #607D8B;
    }

    &:visited {
      color: #455A64;
    }

    &:hover, &:active {
      color: #263238;
      transition-duration: 0.5s;
    }
}
</style>
