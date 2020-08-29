<template>
  <div v-if=(isLoading)>
    <TheSpinner/>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script>
import TheSpinner from './TheSpinner.vue';

export default {
  name: 'BaseSuspend',
  components: {
    TheSpinner,
  },
  props: {
    isLoading: Boolean,
  },
};
</script>
