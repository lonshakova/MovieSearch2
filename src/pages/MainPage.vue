<template>
  <div>
    <header-menu/> 
    <search-movie/>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
import SearchMovie from './components/SearchMovie.vue';
export default {
  components:{
    HeaderMenu,
    SearchMovie
  }
};
</script>

<style>
.app{
  height: 100vh;
  background-color: #2C3E50;
  display: flex;
  flex-direction: column;
}
</style>