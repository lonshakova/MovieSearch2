<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
    class="card-movie"
    :class="{ 'on-hover': isHovering }"
    :elevation="isHovering ? 20 : 2"
    v-bind="props"
    @click="$router.push('/movie')">
      <v-img :src="movie.poster" class="align-end"
        gradient="to bottom, rgba(0,0,0,0),rgba(0,0,0,0), rgba(0,0,0,.8)" cover height="500">
        <div class="info">
          <div class="title-and-description">
            <div class="title">{{movie.title}}</div>
            <div class="description" v-if="isHovering">Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си</div>
          </div>
          
          <div class="btns">
            <v-btn class="btn" v-if="isHovering" icon="mdi-bookmark"></v-btn>
            <v-icon class="btn" icon="mdi-star"></v-icon>
          </div>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-movie{
  margin-top: 45px;
  width: 350px;
  height: 500px;
  border-radius: 25px;
  background-color: #2C3E50;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.info{
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column-reverse;
  text-align: center;
}

.title-and-description{
  color: #F3F7F8;
  text-transform: uppercase;
}

.title{
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;
  font-weight: 100;

}

.description{
  margin: 10px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 17px;
  font-weight: 100;
}

.btns{
  margin-top: 12px;
  width: 350px;
  display: flex;
  justify-content: end;
}

.btn{
  margin-right: 12px;
  background-color: rgba(44, 62, 80, 0.5);
  color:#F3F7F8;
}
</style>