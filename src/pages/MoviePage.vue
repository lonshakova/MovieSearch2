<template>
  <header-menu/>
  <div class="movie">
    <v-img class="poster" src="https://st.kp.yandex.net/images/film_big/535341.jpg"
    gradient="to right, rgba(44, 62, 80, 0.0), rgba(44, 62, 80, 0.0),rgba(44, 62, 80, 0.5),rgba(44, 62, 80, 1)"/>
    
  </div>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu.vue';
import { useMoviesStore } from '../store/movieStore';
export default {
  setup() {
    const moviesStore = useMoviesStore();
    return {
      moviesStore
    }
  },
  components:{
    HeaderMenu
  }
};
</script>

<style>
.poster{
  width: 35%;
}

</style>