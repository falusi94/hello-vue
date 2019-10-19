<template>
  <div class="layout">
    <TheHeader />
    <CenterContainer>
      <BeerList />
    </CenterContainer>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import CenterContainer from './CenterContainer.vue';
import BeerList from './BeerList.vue';
import TheFooter from './TheFooter.vue';

export default {
  name: 'MainLayout',
  components: {
    TheHeader,
    CenterContainer,
    BeerList,
    TheFooter,
  },
};
</script>
