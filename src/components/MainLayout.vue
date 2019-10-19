<template>
  <div class="layout">
    <Header />
    <CenterContainer>
      <BeerList />
    </CenterContainer>
  </div>
</template>

<script>
import Header from './Header.vue';
import CenterContainer from './CenterContainer.vue';
import BeerList from './BeerList.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    CenterContainer,
    BeerList,
  },
};
</script>
