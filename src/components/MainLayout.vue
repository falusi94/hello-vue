<template>
  <div class="layout">
    <Header />
    <CenterContainer>
      <BeerList />
    </CenterContainer>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import CenterContainer from './CenterContainer.vue';
import BeerList from './BeerList.vue';
import Footer from './Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    CenterContainer,
    BeerList,
    Footer,
  },
};
</script>
