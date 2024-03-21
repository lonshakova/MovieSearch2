<template>
  <div class="card-list">
    <div class="card-list">
      <div
      name="card-list" 
      v-for="movie in moviesStore.movies" >
        <movie-card :movie="movie"/>
    </div>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
import { useMoviesStore } from '../store/movieStore';
export default {
  setup() {
    const moviesStore = useMoviesStore();
    return {
      moviesStore
    }
  },
  components: {
    MovieCard
  },

};

</script>

<style scoped>
.card-list{
  margin: 0px 50px;
  padding-right: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>