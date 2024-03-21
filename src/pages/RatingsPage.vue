<template>
  <div class="marks">
    <header-menu/>
    <search-movie/>
  </div>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu.vue';
import SearchMovie from '../components/SearchMovie.vue';
export default {
  components:{
    HeaderMenu,
    SearchMovie
  }
};
</script>

<style scoped>

</style>