<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
    class="card-movie"
    :class="{ 'on-hover': isHovering }"
    v-bind="props">
      <v-img src="https://st.kp.yandex.net/images/film_big/535341.jpg" class="align-end"
        gradient="to bottom, rgba(0,0,0,0),rgba(0,0,0,0), rgba(0,0,0,.8)" cover height="500">
        <div class="info">
          <div class="title-and-description">
            <div class="title">1+1</div>
            <div class="description" v-if="isHovering">Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си</div>
          </div>
          
          <div class="btns">
            <v-btn class="btn" v-if="isHovering" icon="mdi-bookmark"></v-btn>
            <v-btn class="btn" icon="mdi-star"></v-btn>
          </div>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>

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