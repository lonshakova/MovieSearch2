<template>
  <header-menu/>
  <div class="movie">
    <v-img class="poster" :src="movie.poster"
    gradient="to right, rgba(44, 62, 80, 0.0), rgba(44, 62, 80, 0.0),rgba(44, 62, 80, 0.5),rgba(44, 62, 80, 1)" cover/>
    <div class="inform">
      <div class="name">{{ movie.name }}</div>
      <div class="alt-name">The Wolf of Wall Street, (2013)</div>
      <div class="mark-nd-rating">
        <v-icon 
            class="mark" 
            icon="mdi-bookmark"/>
        <v-icon class="rating" icon="mdi-star"/>
      </div>
    </div>
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
  data(){
    return{
      movie: this.moviesStore.movies[2],
      IsMarked: false,
    }
  },
  components:{
    HeaderMenu
  }
};
</script>

<style>
.movie{
  display: flex;
  justify-content: space-between;
}

.poster{
  width: 50%;
}

.inform{
  padding-right: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.name{
  font-weight: 900;
  color: rgba(243, 247, 248, 0.9);
  font-size: 64px;
}

.alt-name{
  font-weight: 100;
  color: rgba(243, 247, 248, 0.7);
  font-size: 32px;
  font-style: italic;
}

.mark-nd-rating{
  display: flex;
  justify-content: end;
  border: 1px rebeccapurple solid;
}

.mark{
  height: 100px;
  width: 100px;
  border: 1px rebeccapurple solid;
  font-size: 50px;
  border-radius: 20px;
  background-color: rgba(32, 32, 32, 1);
  color:#F3F7F8;
}
.rating{
  height: 36px;
  width: 36px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 20px;
  background-color: rgba(32, 32, 32, 1);
  color:#F3F7F8;
}
</style>