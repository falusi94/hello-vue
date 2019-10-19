<template>
  <div class="layout">
    <Header />
    <CenterContainer>
      <BeerItem v-for="(beer) in beers" :key="beer.id" :beer="beer"/>
    </CenterContainer>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import CenterContainer from './CenterContainer.vue';
import BeerItem from './BeerItem.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    CenterContainer,
    BeerItem,
  },
  data() {
    return {
      beers: null,
    };
  },
  created() {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        this.beers = response.data;
      });
  },
};
</script>
