<template>
  <div class="layout">
    <Header />
    <CenterContainer>
      Hello Vue!
    </CenterContainer>
  </div>
</template>

<script>
import Header from './Header.vue';
import CenterContainer from './CenterContainer.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    CenterContainer,
  },
};
</script>
