<template>
  <ul class="beer-list">
    <li v-for="(beer) in beers" :key="beer.id">
      <BeerListItem :beer="beer"/>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import BeerListItem from './BeerListItem.vue';

export default {
  name: 'BeerList',
  components: {
    BeerListItem,
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

<style lang="scss">
  .beer-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-top: 0.2rem;
    }
  }
</style>
