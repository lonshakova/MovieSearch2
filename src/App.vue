<template>
  <div class="app">
    <header-menu/> 
    <search-movie/> 
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';

export default {
  components:{
    HeaderMenu
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app{
  height: 100vh;
  background-color: #2C3E50;
  display: flex;
  flex-direction: column;
}
</style>