<template>
  <div class="card-list">
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
    <movie-card />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
  components: {
    MovieCard
  }
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