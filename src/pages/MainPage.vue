<template>
  <div class="main">
    <header-menu/>
    <search-movie/>
    <card-list/>
  </div>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu.vue';
import SearchMovie from '../components/SearchMovie.vue';
import CardList from '../components/CardList.vue';
export default {
  components:{
    HeaderMenu,
    SearchMovie,
    CardList
  }
};
</script>

<style>

</style>