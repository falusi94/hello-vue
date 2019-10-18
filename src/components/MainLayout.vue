<template>
  <div class="layout">
    <Header />
    <div class="content"></div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
  },
};
</script>
